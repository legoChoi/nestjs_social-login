import { Field, ObjectType } from '@nestjs/graphql';
import { MenuMainCategory } from 'src/apis/menuMainCategory/entities/menuMainCategory.entity';
import { Store } from 'src/apis/store/entities/store.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class MainCategory {
  @PrimaryGeneratedColumn('uuid', { comment: '주 카테고리 ID' })
  @Field(() => String)
  id: string;

  @OneToMany(
    () => MenuMainCategory,
    (menuMainCategory) => menuMainCategory.mainCategory,
  )
  @Field(() => [MenuMainCategory])
  menuMainCategory: MenuMainCategory[];

  @ManyToOne(() => Store)
  @Field(() => Store)
  store: Store;

  @Column({ comment: '주 카테고리 이름' })
  @Field(() => String)
  name: string;

  // @Column({ comment: '주 카테고리 설명' })
  // description: string;

  @Column({ comment: '주 카테고리 순서' })
  order: number;

  // @Column({ comment: '주 카테고리 메뉴 수' })
  // menuCount: number;

  // @CreateDateColumn()
  // createdAt: Date;

  // @UpdateDateColumn()
  // updatedAt: Date;
}
