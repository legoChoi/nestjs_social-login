import { Module } from '@nestjs/common';
import { BookmarkResolver } from './bookmark.resolver';
import { BookmarkService } from './bookmark.service';

@Module({
  imports: [], //
  providers: [BookmarkResolver, BookmarkService],
})
export class BookmarkModule {}
