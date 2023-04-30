import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SmsService } from './sms.service';
import { SmsToken } from './entities/smsToken.entity';

@Resolver()
export class SmsResolver {
  constructor(
    private readonly smsService: SmsService, //
  ) {}

  //
  // 1. 인증번호 6자리 요청
  @Mutation(() => SmsToken, { description: 'SMS 인증번호 요청' })
  requestSMSAuth(
    @Args('phone') phone: string, // //
  ) {
    return this.smsService.requestSmsAuth(phone);
  }

  //
  // 2. 인증번호 검증
  @Mutation(() => SmsToken, { description: 'SMS 인증번호 검증' })
  responseSMSAuth(
    @Args('phone') phone: string, //
    @Args('token') token: string,
    @Args('userId') userId: string,
  ) {
    return this.smsService.responseSmsAuth({ phone, token, userId });
  }

  //
  // for TEST
  @Query(() => SmsToken, { nullable: false })
  fetchSMSAuthLast(
    @Args('phone') phone: string, //
  ) {
    return this.smsService.getLast({ phone });
  }
}
