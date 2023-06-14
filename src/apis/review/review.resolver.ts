import { Args, Query, Resolver } from '@nestjs/graphql';
import { ReviewService } from './review.service';
import { Review } from './entities/review.entity';

@Resolver()
export class ReviewResolver {
  constructor(
    private readonly reviewService: ReviewService, //
  ) {}

  // // 조회: store ID
  // @Query(() => [Review], { description: '리뷰 조회: 매장 ID' })
  // fetchAllReviewByStoreId(
  //   @Args('storeId') storeId: string, //
  // ): Promise<Review[]> {
  //   return this.reviewService.fetchAllByStoreId({ storeId });
  // }

  // // 조회: user ID
  // @Query(() => [Review], { description: '리뷰 조회: 유저 ID' })
  // fetchAllReviewByUserId(
  //   @Args('userId') userId: string, //
  // ): Promise<Review[]> {
  //   return this.reviewService.fetchAllByUserId({ userId });
  // }

  //
  create() {}

  //
  delete() {}
}
