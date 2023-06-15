import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StoreTagService } from './storeTag.service';
import { StoreTag } from './entities/storeTag.entity';
import { CreateStoreTagInput } from './dto/create-storeTag.input';

@Resolver()
export class StoreTagResolver {
  constructor(
    private readonly storeTagService: StoreTagService, //
  ) {}

  @Mutation(() => StoreTag, { description: '가게와 태그 연결' })
  connectTagWithStore(
    @Args('createStoreTagInput') createStoreTagInput: CreateStoreTagInput, //
  ): Promise<StoreTag> {
    return this.storeTagService.connect({ createStoreTagInput });
  }
}
