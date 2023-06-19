import { Field, ObjectType } from '@nestjs/graphql';
import { Store } from 'src/apis/store/entities/store.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class StoreImage {
  @PrimaryGeneratedColumn({ comment: '가게 이미지 ID' })
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  url: string;

  @ManyToOne(() => Store)
  store: Store;
}
