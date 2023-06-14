import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Tag {
  @PrimaryGeneratedColumn('increment', { comment: '태그 ID' })
  @Field(() => String)
  id: string;

  @Column({ comment: '태그 명' })
  @Field(() => String)
  name: string;

  @CreateDateColumn()
  createdAt: Date;
}
