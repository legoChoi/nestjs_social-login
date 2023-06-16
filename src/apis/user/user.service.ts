import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, //
  ) {}

  async create({ phone, nick, gender, birth }) {
    return await this.userRepository.save({ phone, nick, gender, birth });
  }

  // async findOneById({ socialId }) {
  //   return await this.userRepository.findOne({ where: { socialId } });
  // }

  // async findOneByName({ userName }) {
  //   return await this.userRepository.findOne({ where: { nick: userName } });
  // }

  // async findOneByName({ userName }) {
  //   return await this.userRepository.findOne({ where: { userName } });
  // }

  // 자체 회원가입 : 사용 X
  // async create({ userId, hashedPassword: pw, nick, phone, birthday, gender }) {
  //   const user = await this.userRepository.findOne({ where: { userId } });

  //   if (user) throw new ConflictException('이미 등록된 계정입니다.');

  //   return await this.userRepository.save({
  //     userId,
  //     password: pw,
  //     nick,
  //     phone,
  //     birthday,
  //     gender,
  //   });
  // }

  // //
  // //
  // async social_create({ userId, userName, social_type }) {
  //   return await this.userRepository.save({ userId, userName, social_type });
  // }

  // //
  // //
  // async create({ socialId, createUserInput }) {
  //   return await this.userRepository.save({
  //     socialId,
  //   });
  // }
}
