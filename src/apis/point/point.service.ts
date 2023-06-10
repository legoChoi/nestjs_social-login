import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Point } from './entities/point.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PointService {
  constructor(
    @InjectRepository(Point)
    private readonly pointRepository: Repository<Point>, //
  ) {}

  async fetchAll({ userId }): Promise<Point[]> {
    const point = await this.pointRepository.find({ where: { user: userId } });
    return point;
  }
}
