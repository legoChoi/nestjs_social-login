import { ObjectType } from '@nestjs/graphql';
import { Store } from 'src/apis/store/entities/store.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class MainCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Store)
  store: Store;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  order: number;

  @Column()
  menuCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
