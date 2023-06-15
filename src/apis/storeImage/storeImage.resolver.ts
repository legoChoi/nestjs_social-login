import { Resolver } from '@nestjs/graphql';
import { StoreImageService } from './storeImage.service';

@Resolver()
export class StoreImageResolver {
  constructor(
    private readonly storeImageService: StoreImageService, //
  ) {}
}
