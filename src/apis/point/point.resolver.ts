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
  fetchAllUserPoint(
    @Args('userId') userId: string, //
  ): Promise<Point[]> {
    return this.pointService.fetchAllByUserId({ userId });
  }

  @Mutation(() => Point, { description: '[결제 화면] 포인트 지급' })
  createPointForUser(
    @Args('userId') userId: string, //
    @Args('by') by: string,
    @Args('value') value: number,
  ): Promise<Point> {
    return this.pointService.create({ userId, by, value });
  }
}
