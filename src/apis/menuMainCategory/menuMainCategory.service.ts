import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuMainCategory } from './entities/menuMainCategory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuMainCategoryService {
  constructor(
    @InjectRepository(MenuMainCategory)
    private readonly menuMainCategoryRepository: Repository<MenuMainCategory>,
  ) {}

  async createMenuMainCategory({ menuId, mainCategoryId }) {
    await this.menuMainCategoryRepository.save({
      menu: { id: menuId },
      mainCategory: { id: mainCategoryId },
    });
    return 'test';
  }
}
