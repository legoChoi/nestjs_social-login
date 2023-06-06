import { Store } from 'src/apis/store/entities/store.entity';
import { User } from 'src/apis/user/entities/user.entity';
import { AtDate } from 'src/common/entities/atDate.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review extends AtDate {
  @PrimaryGeneratedColumn('uuid', { comment: '리뷰 ID' })
  id: string;

  @ManyToOne(() => Store)
  store: Store;

  @ManyToOne(() => User)
  user: User;
}
