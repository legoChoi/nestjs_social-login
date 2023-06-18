import { Field, ObjectType } from '@nestjs/graphql';
import { Store } from 'src/apis/store/entities/store.entity';
import { UserStoreCoupon } from 'src/apis/userStoreCoupon/entities/userStoreCoupon.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class StoreCoupon {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: string;

  @OneToMany(
    () => UserStoreCoupon,
    (userStoreCoupon) => userStoreCoupon.storeCoupon,
  )
  @Field(() => [UserStoreCoupon])
  userStoreCoupon: UserStoreCoupon[];

  @ManyToOne(() => Store, (store) => store.storeCoupon)
  @Field(() => Store)
  store: Store;
}
