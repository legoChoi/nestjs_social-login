import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StoreService } from './store.service';
import { Store } from './entities/store.entity';

@Resolver()
export class StoreResolver {
  constructor(
    private readonly storeService: StoreService, //
  ) {}

  @Mutation(() => String)
  createStore(
    @Args('name') name: string, //
  ) {
    return this.storeService.createStore({ name });
  }

  @Query(() => Store)
  fetchOneStore(
    @Args('id') id: string, //
  ): Promise<Store> {
    return this.storeService.fetchOneStore({ id });
  }

  @Query(() => [Store])
  fetchAllStore(): Promise<Store[]> {
    return this.storeService.fetchAllStore();
  }
}
