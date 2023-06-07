import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Store {
  @PrimaryGeneratedColumn('uuid', { comment: '가게 ID' })
  @Field(() => String)
  id: string;

  // @Column({ comment: '' })
  // @Field(() => String)
  // storePW: string;

  @Column({})
  @Field(() => String)
  name: string;

  // @Column({})
  // @Field(() => String)
  // owner: string;

  // @Column({})
  // @Field(() => String)
  // registrationNo: string;

  // @Column({})
  // @Field(() => String)
  // storeCall: string;

  // @Column({})
  // @Field(() => String)
  // ownerCall: string;

  // @Column({})
  // @Field(() => String)
  // address: string;

  // @Column({})
  // @Field(() => String)
  // sns: string;

  // @Column({})
  // @Field(() => String)
  // operationTime: string;

  // @Column({})
  // @Field(() => String)
  // dayOff: string;

  // @Column({})
  // @Field(() => String)
  // description: string;

  // @Column({})
  // @Field(() => String)
  // notice: string;

  // @Column({})
  // @Field(() => String)
  // service: string;

  // @Column({ comment: '지연시간 1' })
  // @Field(() => Number)
  // shortDelayTime: number;

  // @Column({ comment: '지연시간 2' })
  // @Field(() => Number)
  // mediumDelayTime: number;

  // @Column({ comment: '지연시간 3' })
  // @Field(() => Number)
  // longDelayTime: number;

  // @CreateDateColumn()
  // createdAt: Date;

  // @UpdateDateColumn()
  // updatedAt: Date;

  // @DeleteDateColumn()
  // deletedAt: Date;
}
