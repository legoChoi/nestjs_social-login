import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class MenuOption {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: string;
}
