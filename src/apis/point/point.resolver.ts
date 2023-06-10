import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PointService } from './point.service';
import { Point } from './entities/point.entity';

@Resolver()
export class PointResolver {
  constructor(
    private readonly pointService: PointService, //
  ) {}

  @Query(() => [Point], {
    description: '[포인트 내역] 포인트 내역 리스트 가져오기',
  })
  fetchAllPoint(
    @Args('userId') userId: string, //
  ): Promise<Point[]> {
    return this.pointService.fetchAll({ userId });
  }
}
