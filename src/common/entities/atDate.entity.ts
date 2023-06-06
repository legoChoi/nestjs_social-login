import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export class AtDate {
  @CreateDateColumn({ comment: '생성일' })
  createdAt: string;
  @UpdateDateColumn({ comment: '수정일' })
  updatedAt: string;
  @DeleteDateColumn({ comment: '삭제일' })
  deletedAt: string;
}
