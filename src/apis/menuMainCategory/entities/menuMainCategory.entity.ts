import { MainCategory } from 'src/apis/mainCategory/entities/mainCategory.entity';
import { Menu } from 'src/apis/menu/entities/menu.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MenuMainCategory {
  @PrimaryGeneratedColumn({ comment: '메뉴 주 카테고리 ID' })
  id: string;

  @ManyToOne(() => Menu)
  menu: Menu;

  @ManyToOne(() => MainCategory)
  mainCategory: MainCategory;
}
