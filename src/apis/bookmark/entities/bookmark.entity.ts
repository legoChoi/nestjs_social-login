import { ObjectType } from '@nestjs/graphql';
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
  @PrimaryGeneratedColumn('uuid', { comment: '북마크 ID' })
  id: string;

  @ManyToOne(() => Store)
  store: Store;

  @ManyToOne(() => User)
  user: User;

  // @CreateDateColumn()
  // createdAt: Date;
}
