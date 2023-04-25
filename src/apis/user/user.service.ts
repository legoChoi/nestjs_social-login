import { ConflictException, Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, //
  ) {}

  async findOneByName({ userName }) {
    return await this.userRepository.findOne({ where: { userName } });
  }

  async updetePhone({ userName, phone }) {
    const user = await this.userRepository.findOne({ where: { userName } });
    user.phone = phone;
    await this.userRepository.update(user.phone, user);
  }

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

  async social_create({ userId, userName, social_type }) {
    return await this.userRepository.save({ userId, userName, social_type });
  }
}
