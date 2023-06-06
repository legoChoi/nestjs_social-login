import { Query, Resolver } from '@nestjs/graphql';
import { ReviewService } from './review.service';

@Resolver()
export class ReviewResolver {
  constructor(
    private readonly reviewService: ReviewService, //
  ) {}

  @Query(() => String)
  testReview(): string {
    return this.reviewService.test();
  }

  //
  create() {}

  //
  delete() {}
}
