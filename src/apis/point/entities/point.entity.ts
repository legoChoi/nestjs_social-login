import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/apis/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Point {
  @PrimaryGeneratedColumn('increment', { comment: '포인트 ID' })
  @Field(() => String)
  id: string;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @Column({ comment: '적립/사용 가게' })
  @Field(() => String)
  by: string;

  @Column({
    type: 'tinyint',
    width: 1,
    comment: '포인트 내역 타입',
  })
  @Field(() => Int)
  type: number;

  @Column({ comment: '적립/사용 포인트' })
  @Field(() => Int)
  value: number;

  @Column({ comment: '잔여 포인트' })
  @Field(() => Int)
  remainPoint: number;

  @CreateDateColumn({ comment: '생성일' })
  createdAt: Date;

  // 필요한가?
  @DeleteDateColumn({ comment: '삭제일' })
  deletedAt: Date;
}
