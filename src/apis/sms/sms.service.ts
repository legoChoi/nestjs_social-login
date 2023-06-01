import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { SmsToken } from './entities/smsToken.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import * as authTool from 'src/common/tools/auth.tool';

@Injectable()
export class SmsService {
  constructor(
    private readonly connection: Connection, //

    @InjectRepository(SmsToken)
    private readonly smsTokenRepository: Repository<SmsToken>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  //
  // TODO: Error 처리
  async getLast({ phone }): Promise<SmsToken> {
    return await this.smsTokenRepository.findOne({
      where: { phone, isValid: true },
    });
  }

  //
  // SMS Auth 요청
  async requestSmsAuth(to: string): Promise<SmsToken> {
    //
    // 1. 유효한 검증 토큰 찾기
    console.log('1');

    const validToken = await this.smsTokenRepository.findOne({
      where: { isValid: true },
    });

    console.log('2');
    //
    // 1-1. 유효한 토큰 있으면 isValid false로 업데이트
    if (validToken) {
      const { id, ...rest } = validToken;
      await this.smsTokenRepository.update({ id }, { isValid: false });
    }

    console.log('3');
    //
    // 2. 새로운 유효 검증 토큰 발급
    const token = authTool.getSmsToken6(6);

    // smsTool.sendSmsTokenToSMS(to, token); // SMS 발송 API 호출

    return await this.smsTokenRepository.save({
      phone: to,
      token,
    });
  }

  //
  // SMS Auth 검증 : 토큰 비교
  async responseSmsAuth({ phone, token, userId }): Promise<SmsToken> {
    //
    // 1. 유효한 검증 토큰 찾기
    const data = await this.smsTokenRepository.findOne({
      where: { phone, isValid: true },
    });

    console.log(data);

    //
    // 2. 토큰 비교 : 토큰 검증 성공 시 데이터 update => Transaction : READ COMMITED
    if (data.token == token) {
      const queryRunner = await this.connection.createQueryRunner();
      await queryRunner.connect();

      await queryRunner.startTransaction('READ COMMITTED');

      try {
        const updatedData = await this.smsTokenRepository.create({
          ...data,
          isAuth: true,
          isValid: false,
        });

        await queryRunner.manager.save(updatedData);

        // 문제 발생??
        // const user = await this.userRepository.findOne({
        //   where: { socialId },
        // });

        const updatedUser = await this.userRepository.create({
          // ...user,
          phone,
        });
        await queryRunner.manager.save(updatedUser);

        await queryRunner.commitTransaction();
      } catch (error) {
        await queryRunner.rollbackTransaction();
      } finally {
        await queryRunner.release();
      }
    }

    return data;
  }
}
