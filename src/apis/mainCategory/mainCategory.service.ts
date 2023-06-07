import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MainCategory } from './entities/mainCategory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MainCategoryService {
  constructor(
    @InjectRepository(MainCategory)
    private readonly menuCategoryRepository: Repository<MainCategory>,
  ) {}

  async createMainCategory({ name, storeId }) {
    await this.menuCategoryRepository.save({ name, store: { id: storeId } });

    return 'name';
  }
}
