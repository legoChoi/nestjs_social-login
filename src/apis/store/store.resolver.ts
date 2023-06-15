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
    return this.storeService.create({ name });
  }

  @Query(() => Store)
  fetchOneStore(
    @Args('id') id: string, //
  ): Promise<Store> {
    return this.storeService.fetchOne({ id });
  }

  //
  // 매장 리스트 화면
  @Query(() => [Store])
  fetchAllStoreList(): Promise<Store[]> {
    return this.storeService.fetchAll();
  }

  //
  @Query(() => Store)
  fetchStoreWithAllMenu(
    @Args('storeId') storeId: string, //
  ): Promise<Store> {
    return this.storeService.fetchWithAllMenu({ storeId });
  }
}
