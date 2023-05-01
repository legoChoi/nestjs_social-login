import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointService } from './point.service';
import { PointResolver } from './point.resolver';
import { Point } from './entities/point.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Point])],
  providers: [
    PointResolver, //
    PointService,
  ],
})
export class PointModule {}
