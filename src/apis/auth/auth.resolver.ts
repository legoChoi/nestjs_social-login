import {
  HttpCode,
  HttpStatus,
  UnprocessableEntityException,
  UseGuards,
} from '@nestjs/common';
import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { GqlAuthRefreshGuard } from 'src/common/auth/gql-auth.guard';
import { CurrentUser } from 'src/common/auth/gql-user.param';
import { SmsToken } from './entities/smsToken.entity';
import { SmsTokenOutput } from './dto/smsToken.output';

@Resolver()
export class AuthResolver {
  constructor(
    // private readonly userService: UserService, //
    private readonly authService: AuthService, //
  ) {}

  //
  //
  @Mutation(() => SmsToken, { description: 'SMS 인증 요청' })
  requestSMSAuth(
    @Args('phone') phone: string, //
  ) {
    return this.authService.requestSmsAuth(phone);
  }

  //
  //
  @Mutation(() => SmsToken, { description: 'SMS 인증 검증' })
  responseSMSAuth(
    @Args('phone') phone: string, //
    @Args('token') token: string,
    @Args('userName') userName: string,
  ) {
    return this.authService.responseSmsAuth({ phone, token, userName });
  }

  @Query(() => SmsToken)
  fetchSMSAuthLast(
    @Args('phone') phone: string, //
  ) {
    return this.authService.getLast({ phone });
  }

  //
  //
  @UseGuards(GqlAuthRefreshGuard)
  @Mutation(() => String, { description: 'Access Token 재발급' })
  restoreRefreshToken(
    @CurrentUser() currentUser: any, //
  ) {
    return this.authService.getAccessToken({ user: currentUser });
  }
}
