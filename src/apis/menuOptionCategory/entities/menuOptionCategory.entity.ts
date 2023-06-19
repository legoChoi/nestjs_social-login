import { Field, ObjectType } from '@nestjs/graphql';
import { Menu } from 'src/apis/menu/entities/menu.entity';
import { MenuOption } from 'src/apis/menuOption/entities/menuOption.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class MenuOptionCategory {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: string;

  @ManyToOne(() => Menu, (menu) => menu.menuOptionCategory)
  @Field(() => Menu)
  menu: Menu;

  @OneToMany(() => MenuOption, (menuOption) => menuOption.menuOptionCategory)
  @Field(() => [MenuOption])
  menuOption: MenuOption[];
}
