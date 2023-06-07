import { ObjectType } from '@nestjs/graphql';
import { Store } from 'src/apis/store/entities/store.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class MainCategory {
  @PrimaryGeneratedColumn('uuid', { comment: '주 카테고리 ID' })
  id: string;

  @ManyToOne(() => Store)
  store: Store;

  @Column({ comment: '주 카테고리 이름' })
  name: string;

  // @Column({ comment: '주 카테고리 설명' })
  // description: string;

  // @Column({ comment: '주 카테고리 순서' })
  // order: number;

  // @Column({ comment: '주 카테고리 메뉴 수' })
  // menuCount: number;

  // @CreateDateColumn()
  // createdAt: Date;

  // @UpdateDateColumn()
  // updatedAt: Date;
}
