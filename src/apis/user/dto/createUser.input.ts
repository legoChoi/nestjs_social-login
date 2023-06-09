import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  nick: string;

  @Field(() => String)
  birth: string;

  @Field(() => Boolean)
  gender: boolean;
}
