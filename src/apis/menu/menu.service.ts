import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>, //
  ) {}

  async createMenu({ name, storeId }): Promise<Menu> {
    const menu = await this.menuRepository.save({
      name,
      store: { id: storeId },
    });
    return menu;
  }

  async fetchAll({ storeId }): Promise<Menu[]> {
    const menu = await this.menuRepository.find({
      where: { store: { id: storeId } },
    });

    return menu;
  }
}
