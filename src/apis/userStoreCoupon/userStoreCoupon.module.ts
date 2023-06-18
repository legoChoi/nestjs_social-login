import { Module } from '@nestjs/common';
import { UserStoreCouponResolver } from './userStoreCoupon.resolver';
import { UserStoreCouponServcie } from './userStoreCoupon.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserStoreCoupon } from './entities/userStoreCoupon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserStoreCoupon])],
  providers: [UserStoreCouponResolver, UserStoreCouponServcie],
})
export class UserStoreCouponModule {}
