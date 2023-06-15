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

  async connetMenuMainCategory({
    menuId,
    mainCategoryId,
  }): Promise<MenuMainCategory> {
    const menuMainCategory = await this.menuMainCategoryRepository.save({
      menu: { id: menuId },
      mainCategory: { id: mainCategoryId },
    });
    return menuMainCategory;
  }
}
