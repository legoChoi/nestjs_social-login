import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, //
    private readonly userService: UserService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getAccessToken({ user }): String {
    return this.jwtService.sign(
      { userId: user.userId, sub: user.id }, // 데이터
      { secret: process.env.JWT_ACCESS_KEY, expiresIn: '3000s' }, // 옵션
    );
  }

  setRefreshToken({ user, res }): void {
    const refreshToken = this.jwtService.sign(
      { userId: user.userId, sub: user.id },
      { secret: process.env.JWT_REFRESH_KEY, expiresIn: '4w' },
    );

    console.log(`token : ${refreshToken}`);

    res.setHeader('Set-Cookie', `refreshToken=${refreshToken}; path=/;`);
  }

  async loginOAuth({ req, res }): Promise<void> {
    console.log(req.user);

    // 1. 가입 확인
    let user = await this.userService.findOneByName({
      userName: req.user.userName,
    });

    // 2. 회원 가입
    if (!user) {
      user = await this.userService.social_create({ ...req.user });
    }

    this.setRefreshToken({ user, res });

    res.redirect(
      'http://localhost:5500/homework/social-login/frontend/social-login.html',
    );
  }

  /*
    소셜 로그인 로직
    1. 소셜 로그인
  
    2. sms 인증

    3. 추가 정보 입력
      + 유저 이름 입력 받아야 할 듯
      닉네임
      생년월일
      성별
  */

  async login({ phone, type }) {
    const user = this.userRepository.findOne({
      where: { phone, social_type: type },
    });

    return this.getAccessToken({ user });
  }

  getFromInput({ input }) {
    //
    // 1. social_type+''+token 형식 분리해서 나누기
    const arr: string[] = input.split(' ', 2);
    const social_type: string = arr[0];
    const token: string = arr[1];

    return { social_type, token };
  }

  requestSocialJoin({ item }) {
    //
    // 2. JWT 토큰 분해 (id)
  }
}
