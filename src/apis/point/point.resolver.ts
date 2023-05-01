import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { PointService } from './point.service';
import { Point } from './entities/point.entity';

@Resolver()
export class PointResolver {
  constructor(
    private readonly pointService: PointService, //
  ) {}

  @Query(() => String)
  getPointHello() {
    return this.pointService.getHelloPoint();
  }

  @Mutation(() => Point)
  getUserPoint() {
    return;
  }
}
