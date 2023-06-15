import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStoreTagInput {
  @Field(() => String)
  storeId: string;

  @Field(() => String)
  tagId: string;
}
