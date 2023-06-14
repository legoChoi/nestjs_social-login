import { Field, ObjectType } from '@nestjs/graphql';
import { Store } from 'src/apis/store/entities/store.entity';
import { User } from 'src/apis/user/entities/user.entity';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Bookmark {
  @PrimaryGeneratedColumn('increment', { comment: '북마크 ID' })
  @Field(() => String)
  id: string;

  @ManyToOne(() => Store)
  @Field(() => Store)
  store: Store;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  // @CreateDateColumn()
  // createdAt: Date;
}
