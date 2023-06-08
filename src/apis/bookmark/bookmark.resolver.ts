import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookmarkService } from './bookmark.service';

@Resolver()
export class BookmarkResolver {
  constructor(private readonly bookmarkService: BookmarkService) {}

  // 북마크 설정
  @Mutation(() => String, { description: '북마크 설정' })
  createBookmark(): string {
    return this.bookmarkService.create();
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
  @Query(() => String, { description: '북마크 가게 모두 가져오기' })
  fetchAllBookmark() {
    return this.bookmarkService.fetchAll();
  }
}