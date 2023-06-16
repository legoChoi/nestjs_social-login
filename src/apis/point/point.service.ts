import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Point } from './entities/point.entity';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';

@Injectable()
export class PointService {
  constructor(
    @InjectRepository(Point)
    private readonly pointRepository: Repository<Point>, //
  ) {}

  //
  async create({ userId, by, value }): Promise<Point> {
    return await this.pointRepository.save({ user: { id: userId }, by, value });
  }

  //
  async fetchAllByUserId(
    { userId }, //
  ): Promise<Point[]> {
    const point = await this.pointRepository.find({
      where: { user: { id: userId } },
    });
    return point;
  }
}
