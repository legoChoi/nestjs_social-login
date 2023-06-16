import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MainCategoryService } from './mainCategory.service';
import { MainCategory } from './entities/mainCategory.entity';

@Resolver()
export class MainCategoryResolver {
  constructor(private readonly menuCategoryService: MainCategoryService) {}

  @Mutation(() => MainCategory)
  createMainCategory(
    @Args('name') name: string,
    @Args('storeId') storeId: string,
  ): Promise<MainCategory> {
    //
    return this.menuCategoryService.create({ name, storeId });
  }

  @Query(() => [MainCategory])
  fetchAllCategoryAndMenu(
    @Args('storeId') storeId: string, //
  ): Promise<MainCategory[]> {
    return this.menuCategoryService.fetchAll({ storeId });
  }
}
