import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookmarkService } from './bookmark.service';
import { Bookmark } from './entities/bookmark.entity';

@Resolver()
export class BookmarkResolver {
  constructor(private readonly bookmarkService: BookmarkService) {}

  // 북마크 설정
  @Mutation(() => Bookmark, { description: '북마크 설정' })
  createBookmark(
    @Args('userId') userId: string,
    @Args('storeId') storeId: string,
  ): Promise<Bookmark> {
    return this.bookmarkService.create({ userId, storeId });
  }

  // 북마크 삭제
  @Mutation(() => String, { description: '북마크 삭제' })
  deleteBookmark() {
    return this.bookmarkService.delete();
  }

  // 북마크 가게의 페이지로 이동
  @Query(() => String, { description: '북마크 가게로 이동' })
  moveToBoolmark() {
    return this.bookmarkService.fetchOne();
  }

  // 모든 북마크 가게 불러오기
  @Query(() => [Bookmark], { description: '북마크 가게 모두 가져오기' })
  fetchAllBookmark(
    @Args('userId') userId: string, //
  ): Promise<Bookmark[]> {
    return this.bookmarkService.fetchAll({ userId });
  }

  @Query(() => Boolean, { description: '유저 북마크 검사' })
  checkBookmarkByUserId(
    @Args('userId') userId: string,
    @Args('storeId') storeId: string,
  ) {
    return this.bookmarkService.checkBookmarking({ userId, storeId });
  }
}
