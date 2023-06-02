import { Query, Resolver } from '@nestjs/graphql';
import { BookmarkService } from './bookmark.service';

@Resolver()
export class BookmarkResolver {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Query(() => String)
  bookmarkQuery() {
    return this.bookmarkService.testQuery();
  }
}
