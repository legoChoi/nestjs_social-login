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
  @PrimaryGeneratedColumn('uuid', { comment: '고유 번호' })
  @Field(() => String)
  id: string;

  @ManyToOne(() => User)
  user: User;

  @Column({ comment: '적립/사용 가게' })
  @Field(() => String)
  from: string;

  @Column({
    type: 'tinyint',
    width: 1,
    comment: '',
  })
  @Field(() => Int)
  type: number;

  @Column({ comment: '적립/사용 포인트' })
  @Field(() => Int)
  value: number;

  @Column({ comment: '남은 포인트 총액' })
  @Field(() => Int)
  remainPoint: number;

  @CreateDateColumn({ comment: '생성일' })
  createdAt: Date;

  @DeleteDateColumn({ comment: '삭제일' })
  deletedAt: Date;
}
