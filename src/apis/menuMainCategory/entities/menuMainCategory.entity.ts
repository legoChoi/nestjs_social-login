import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MenuMainCategory {
  @PrimaryGeneratedColumn()
  id: string;
}
