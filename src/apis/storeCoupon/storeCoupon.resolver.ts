import { Resolver } from '@nestjs/graphql';
import { StoreCouponService } from './storeCoupon.service';

@Resolver()
export class StoreCouponResolver {
  constructor(
    private readonly storeCouponService: StoreCouponService, //
  ) {}
}
