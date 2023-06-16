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

  //
  async create({ userId, storeId }): Promise<Bookmark> {
    const bookmark = await this.bookmarkRepository.save({
      user: { id: userId },
      store: { id: storeId },
    });

    return bookmark;
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
  async fetchAll({ userId }): Promise<Bookmark[]> {
    const bookmark = await this.bookmarkRepository.find({
      where: { user: { id: userId } },
      relations: ['store'],
    });

    return bookmark;
  }
}
