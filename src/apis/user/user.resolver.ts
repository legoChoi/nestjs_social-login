import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlAuthAccessGuard } from 'src/common/auth/gql-auth.guard';
import { CurrentUser } from 'src/common/auth/gql-user.param';
import { CreateUserInput } from './dto/createUser.input';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService, //
  ) {}

  // @Mutation(() => User)
  // async createUser(
  //   @Args('userId') userId: string,
  //   @Args('pwd') pwd: string,
  //   @Args('nick') nick: string,
  //   @Args('phone') phone: string,
  //   @Args('birthday') birthday: string,
  //   @Args('gender') gender: Number,
  // ) {
  //   const hashedPassword = await bcrypt.hash(pwd, 10);

  //   return this.userService.create({
  //     userId,
  //     hashedPassword,
  //     nick,
  //     phone,
  //     birthday,
  //     gender,
  //   });
  // }

  @UseGuards(GqlAuthAccessGuard) // 필터링
  @Query(() => String)
  fetchUser(
    @CurrentUser() currentUser: any, //
  ) {
    console.log('test', currentUser);

    return 'test fetchUser';
  }

  @Mutation(() => User)
  requestUserJoin(
    @Args('userId') userId: string,
    @Args('createUserInput') createUserInput: CreateUserInput, //
  ) {
    return this.userService.create({ userId, createUserInput });
  }
}
