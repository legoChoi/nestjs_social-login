import { Injectable } from '@nestjs/common';
import { Bookmark } from './entities/bookmark.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectRepository(Bookmark)
    private readonly bookmarkRepository: Repository<Bookmark>,
  ) {}

  testQuery() {
    return 'test bookmark';
  }

  //
  create() {
    return 'create bookmark';
  }

  //
  delete() {
    return 'delete bookmark';
  }

  //
  fetchOne() {
    return 'fetch one bookmark';
  }

  //
  fetchAll() {
    return 'fetch all bookmark';
  }
}
