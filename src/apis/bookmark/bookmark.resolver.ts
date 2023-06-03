import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookmarkService } from './bookmark.service';

@Resolver()
export class BookmarkResolver {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Query(() => String)
  bookmarkQuery(): string {
    return this.bookmarkService.testQuery();
  }

  // 북마크 설정
  @Mutation(() => String)
  createBookmark(): string {
    return this.bookmarkService.create();
  }

  // 북마크 삭제
  @Mutation(() => String)
  deleteBookmark() {
    return this.bookmarkService.delete();
  }

  // 북마크 가게의 페이지로 이동
  @Query(() => String)
  moveToBoolmark() {
    return this.bookmarkService.fetchOne();
  }

  // 모든 북마크 가게 불러오기
  @Query(() => String)
  fetchAllBookmark() {
    return this.bookmarkService.fetchAll();
  }
}
