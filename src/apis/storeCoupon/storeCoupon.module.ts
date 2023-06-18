import { Module } from '@nestjs/common';
import { StoreCouponResolver } from './storeCoupon.resolver';
import { StoreCouponService } from './storeCoupon.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreCoupon } from './entities/storeCoupon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoreCoupon])],
  providers: [StoreCouponResolver, StoreCouponService],
})
export class StoreCouponModule {}
