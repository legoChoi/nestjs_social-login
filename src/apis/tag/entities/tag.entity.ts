import { Field, ObjectType } from '@nestjs/graphql';
import { StoreTag } from 'src/apis/storeTag/entities/storeTag.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
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

  @OneToMany(() => StoreTag, (storeTag) => storeTag.id)
  storeTag: StoreTag[];

  @CreateDateColumn()
  createdAt: Date;
}
