import { Field, ObjectType } from '@nestjs/graphql';
import { MenuOptionCategory } from 'src/apis/menuOptionCategory/entities/menuOptionCategory.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class MenuOption {
  @PrimaryGeneratedColumn({ comment: '메뉴 세부 옵션 ID' })
  @Field(() => String)
  id: string;

  @ManyToOne(
    () => MenuOptionCategory,
    (menuOptionCategory) => menuOptionCategory.menuOption,
  )
  @Field(() => MenuOptionCategory)
  menuOptionCategory: MenuOptionCategory;
}
