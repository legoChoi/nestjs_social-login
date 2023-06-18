import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class MenuOptionCategory {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: string;
}
