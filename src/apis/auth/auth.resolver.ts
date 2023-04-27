import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { GqlAuthRefreshGuard } from 'src/common/auth/gql-auth.guard';
import { CurrentUser } from 'src/common/auth/gql-user.param';
import { SmsToken } from './entities/smsToken.entity';

@Resolver()
export class AuthResolver {
  constructor(
    // private readonly userService: UserService, //
    private readonly authService: AuthService, //
  ) {}

  //
  //
  @UseGuards(GqlAuthRefreshGuard)
  @Mutation(() => String, { description: 'Access Token 재발급' })
  restoreRefreshToken(
    @CurrentUser() currentUser: any, //
  ) {
    return this.authService.getAccessToken({ user: currentUser });
  }

  @Mutation(() => String)
  login(
    @Args('phone') phone: string, //
    @Args('type') type: number,
  ) {
    return this.authService.login({ phone, type });
  }

  ///////////// SMS Authentication

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
    @Args('userId') userId: string,
  ) {
    return this.authService.responseSmsAuth({ phone, token, userId });
  }

  @Query(() => SmsToken, { nullable: false })
  fetchSMSAuthLast(
    @Args('phone') phone: string, //
  ) {
    return this.authService.getLast({ phone });
  }

  /*
    1. 소셜 회원가입 : userId로 초기화
    2. 휴대폰 인증 : userId와 폰번, 토큰으로 검증 후 통과되면 userId에 해당하는 유저에 폰번 등록
    3. 추가정보 입력 : 
  */

  @Mutation(() => String)
  requestSocialJoin(
    @Args('input') input: string, //
  ) {
    return this.authService.requestSocialJoin({ input });
  }
}
