import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MenuMainCategoryService } from './menuMainCategory.service';

@Resolver()
export class MenuMainCategoryResolver {
  constructor(
    private readonly menuMainCategoryService: MenuMainCategoryService, //
  ) {}

  @Mutation(() => String)
  createMenuMainCategory(
    @Args('menuId') menuId: string,
    @Args('mainCategoryId') mainCategoryId: string,
  ) {
    return this.menuMainCategoryService.createMenuMainCategory({
      menuId,
      mainCategoryId,
    });
  }
}
