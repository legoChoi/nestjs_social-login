import { Field, ObjectType } from '@nestjs/graphql';
import { MainCategory } from 'src/apis/mainCategory/entities/mainCategory.entity';
import { Menu } from 'src/apis/menu/entities/menu.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class MenuMainCategory {
  @PrimaryGeneratedColumn({ comment: '메뉴 주 카테고리 ID' })
  @Field(() => String)
  id: string;

  @ManyToOne(() => Menu)
  @Field(() => Menu)
  menu: Menu;

  @ManyToOne(() => MainCategory)
  @Field(() => MainCategory)
  mainCategory: MainCategory;

  @Column({ comment: '카테고리 내 메뉴 순서' })
  order: number;
}
