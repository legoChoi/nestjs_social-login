import { Store } from 'src/apis/store/entities/store.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StoreTag {
  @PrimaryGeneratedColumn('increment', { comment: '가게 태그 ID' })
  id: string;

  @ManyToOne(() => Store)
  store: string;

  tag: string;
}
