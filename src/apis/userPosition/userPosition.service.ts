import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPosition } from './entities/userPosition.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UserPositionService {
  constructor(
    @InjectRepository(UserPosition)
    private readonly userPositionRepository: Repository<UserPosition>, //
  ) {}

  async create({ userId, lat, lng }): Promise<UserPosition> {
    return await this.userPositionRepository.save({
      user: { id: userId },
      lat,
      lng,
    });
  }

  async get({ userId01, userId02 }) {
    const distance = this.userPositionRepository
      .createQueryBuilder('userPosition')
      .select()
      .addSelect(`6371 * acos(cos(radians(lat)) * cos(radians(l)))`);
  }

  //   async setSelected({ userId, posId }): Promise<UpdateResult> {
  //     const selectedData = await this.userPositionRepository.findOne({
  //       where: { user: { id: userId }, isSelected: true },
  //     });

  //     if (selectedData) {
  //       const { id, ...rest } = selectedData;
  //       await this.userPositionRepository.update({ id }, { isSelected: false });
  //     }

  //     return await this.userPositionRepository.update(
  //       { id: posId },
  //       { isSelected: true },
  //     );
  //   }
}
