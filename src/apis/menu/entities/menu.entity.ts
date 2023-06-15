import { Field, ObjectType } from '@nestjs/graphql';
import { MenuMainCategory } from 'src/apis/menuMainCategory/entities/menuMainCategory.entity';
import { Store } from 'src/apis/store/entities/store.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

@Entity()
@ObjectType()
export class Menu {
  @PrimaryGeneratedColumn({ comment: '메뉴 ID' })
  @Field(() => String)
  id: string;

  @OneToMany(
    () => MenuMainCategory,
    (menuMainCategory) => menuMainCategory.menu,
  )
  @Field(() => [MenuMainCategory])
  menuMainCategory: MenuMainCategory[];

  @ManyToOne(() => Store, (store) => store.menu)
  @Field(() => Store)
  store: Store;

  @Column({ comment: '메뉴 이름' })
  @Field(() => String)
  name: string;

  // @Column({ comment: '메뉴 설명' })
  // description: string;

  // @Column({ comment: '메뉴 원가격' })
  // price: number;

  // @Column({ comment: '메뉴 할인율' })
  // discountRate: number;

  // @Column({ comment: '메뉴 할인 가격' })
  // discountPrice: string;

  // @Column({ comment: '메뉴 재고량' })
  // stock: number;

  // @Column({ comment: '메뉴 품절 상태' })
  // isSoldout: boolean;

  // @Column({ comment: '메뉴 이미지' })
  // menuImg: string;
}
