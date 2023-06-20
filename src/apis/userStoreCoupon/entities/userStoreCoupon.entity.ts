import { Field, ObjectType } from '@nestjs/graphql';
import { StoreCoupon } from 'src/apis/storeCoupon/entities/storeCoupon.entity';
import { User } from 'src/apis/user/entities/user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class UserStoreCoupon {
  @PrimaryGeneratedColumn({ comment: '유저 가게 쿠폰 ID' })
  @Field(() => String)
  id: string;

  @ManyToOne(() => StoreCoupon, (storeCoupon) => storeCoupon.userStoreCoupon)
  @Field(() => StoreCoupon)
  storeCoupon: StoreCoupon;

  @ManyToOne(() => User, (user) => user.userStoreCoupon)
  @Field(() => User)
  user: User;
}
