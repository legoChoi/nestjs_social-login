import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';

interface IOAuthUser {
  user: Pick<
    User,
    'userId' | 'phone' | 'birthday' | 'social_type' | 'isCompleted'
  >;
}

@Controller('/login')
export class AuthController {
  constructor(
    private readonly authService: AuthService, //
  ) {}

  @Get('/login/kakao')
  @UseGuards(AuthGuard('kakao'))
  loginKaKao(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    this.authService.loginOAuth({ req, res });
  }

  // @Get('/naver')
  // @UseGuards(AuthGuard('naver'))
  // loginNaver(
  //   @Req() req: Request & IOAuthUser, //
  //   @Res() res: Response,
  // ) {
  //   this.authService.loginOAuth({ req, res });
  // }

  // @Get('/google')
  // @UseGuards(AuthGuard('google'))
  // loginGoogle(
  //   @Req() req: Request & IOAuthUser, //
  //   @Res() res: Response,
  // ) {
  //   this.authService.loginOAuth({ req, res });
  // }
}
