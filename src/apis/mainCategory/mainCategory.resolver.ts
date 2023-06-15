import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MainCategoryService } from './mainCategory.service';

@Resolver()
export class MainCategoryResolver {
  constructor(private readonly menuCategoryService: MainCategoryService) {}

  @Mutation(() => String)
  MainCategory(@Args('name') name: string, @Args('storeId') storeId: string) {
    return this.menuCategoryService.createMainCategory({ name, storeId });
  }
}
