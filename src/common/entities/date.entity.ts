import { ObjectType } from '@nestjs/graphql';
import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class DateEntity {
  @CreateDateColumn({ comment: '생성일' })
  createdAt: string;
  @UpdateDateColumn({ comment: '수정일' })
  updatedAt: string;
  @DeleteDateColumn({ comment: '삭제일' })
  deletedAt: string;
}
