import { Field, ObjectType } from '@nestjs/graphql';
import { Store } from 'src/apis/store/entities/store.entity';
import { Tag } from 'src/apis/tag/entities/tag.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class StoreTag {
  @PrimaryGeneratedColumn('increment', { comment: '가게 태그 ID' })
  @Field(() => String)
  id: string;

  @ManyToOne(() => Store, (store) => store.id)
  @Field(() => Store)
  store: string;

  @ManyToOne(() => Tag, (tag) => tag.id)
  @Field(() => Tag)
  tag: string;
}
