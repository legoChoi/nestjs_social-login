import { Field, InputType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  nick: string;

  @Field(() => String)
  birth: string;

  @Field(() => Boolean)
  gender: boolean;
}
