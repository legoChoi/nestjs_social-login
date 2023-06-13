import { Query, Resolver } from '@nestjs/graphql';
import { StoreTagService } from './storeTag.service';

@Resolver()
export class StoreTagResolver {
  constructor(
    private readonly storeTagService: StoreTagService, //
  ) {}

  fetchAllStoreTag() {}
}
