import { Query, Resolver } from '@nestjs/graphql';
import { StoreService } from './store.service';

@Resolver()
export class StoreResolver {
  constructor(
    private readonly storeService: StoreService, //
  ) {}

  @Query(() => String)
  testStore() {
    return this.storeService.getText();
  }
}
