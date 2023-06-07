import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StoreService } from './store.service';

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
}
