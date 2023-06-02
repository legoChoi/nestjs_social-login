import { Query, Resolver } from '@nestjs/graphql';
import { StoreService } from './store.service';

@Resolver()
export class StoreResolver {
  constructor(
    private readonly storeService: StoreService, //
  ) {}

  @Query(() => String)
  storeQuery() {
    return this.storeService.getText();
  }
}
