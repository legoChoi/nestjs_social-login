import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as authTool from 'src/common/tools/auth.tool';
import 'dotenv/config';
import { InjectRepository } from '@nestjs/typeorm';
import { SmsToken } from './entities/smsToken.entity';
import { Connection, EntityNotFoundError, Repository } from 'typeorm';
import { interval } from 'rxjs';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, //
    private readonly userService: UserService,
    private readonly connection: Connection,

    @InjectRepository(SmsToken)
    private readonly smsTokenRepository: Repository<SmsToken>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getAccessToken({ user }): String {
    return this.jwtService.sign(
      { userId: user.userId, sub: user.id }, // 데이터
      { secret: process.env.JWT_ACCESS_KEY, expiresIn: '20s' }, // 옵션
    );
  }

  setRefreshToken({ user, res }): void {
    const refreshToken = this.jwtService.sign(
      { userId: user.userId, sub: user.id },
      { secret: process.env.JWT_REFRESH_KEY, expiresIn: '2w' },
    );

    console.log(refreshToken);

    res.setHeader('Set-Cookie', `refreshToken=${refreshToken}; path=/;`);
  }

  async requestSmsAuth(to: string) {
    //
    // 1. 유효한 검증 토큰 찾기
    const validToken = await this.smsTokenRepository.findOne({
      where: { isValid: true },
    });

    //
    // 1-1. 유효한 토큰 있으면 isValid false로 업데이트
    if (validToken) {
      const { id, ...rest } = validToken;
      await this.smsTokenRepository.update({ id }, { isValid: false });
    }

    //
    // 2. 새로운 유효 검증 토큰 발급
    const token = authTool.getSmsToken(6);

    // authTool.sendSmsTokenToSMS(to, token); // SMS 발송 API 호출

    return await this.smsTokenRepository.save({
      phone: to,
      token,
    });
  }

  //
  // TODO: Error 처리
  async getLast({ phone }): Promise<SmsToken> {
    return await this.smsTokenRepository
      .createQueryBuilder('sms_token')
      .select('*')
      .where('sms_token.phone = :phone', { phone })
      .andWhere('sms_token.isValid = :isValid', { isValid: true })
      .getRawOne();

    return await this.smsTokenRepository.findOne({
      where: { phone, isValid: true },
    });
  }

  //
  // SMS 검증 : 토큰 비교
  async responseSmsAuth({ phone, token, userName }): Promise<SmsToken> {
    //
    // 1. 유효한 검증 토큰 찾기
    const data = await this.smsTokenRepository.findOne({
      where: { phone, isValid: true },
    });

    console.log(data);

    //
    // 2. 토큰 비교 : 토큰 검증 성공 시 데이터 update
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

        const user = await this.userRepository.findOne({ where: { userName } });

        const updatedUser = await this.userRepository.create({
          ...user,
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

  async loginOAuth({ req, res }): Promise<void> {
    console.log(req.user);

    // 1. 가입 확인
    let user = await this.userService.findOneByName({
      userName: req.user.userName,
    });

    // 2. 회원 가입
    if (!user) {
      user = await this.userService.social_create({ ...req.user });
    }

    this.setRefreshToken({ user, res });

    res.redirect(
      'http://localhost:5500/homework/social-login/frontend/social-login.html',
    );
  }

  /*
    소셜 로그인 로직
    1. 소셜 로그인
  
    2. sms 인증

    3. 추가 정보 입력
      + 유저 이름 입력 받아야 할 듯
      닉네임
      생년월일
      성별
  */
}
