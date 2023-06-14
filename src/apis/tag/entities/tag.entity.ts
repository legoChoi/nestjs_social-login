import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn('increment', { comment: '태그 ID' })
  id: string;

  @Column(() => String)
  name: string;

  @CreateDateColumn()
  createdAt: Date;
}
