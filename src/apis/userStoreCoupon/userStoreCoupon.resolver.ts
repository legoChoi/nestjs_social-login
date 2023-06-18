import { Resolver } from '@nestjs/graphql';
import { UserStoreCouponServcie } from './userStoreCoupon.service';

@Resolver()
export class UserStoreCouponResolver {
  constructor(
    private readonly userStoreCouponService: UserStoreCouponServcie, //
  ) {}
}
