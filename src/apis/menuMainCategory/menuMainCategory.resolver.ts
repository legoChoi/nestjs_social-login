import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MenuMainCategoryService } from './menuMainCategory.service';
import { MenuMainCategory } from './entities/menuMainCategory.entity';

@Resolver()
export class MenuMainCategoryResolver {
  constructor(
    private readonly menuMainCategoryService: MenuMainCategoryService, //
  ) {}

  @Mutation(() => MenuMainCategory)
  createMenuMainCategory(
    @Args('menuId') menuId: string,
    @Args('mainCategoryId') mainCategoryId: string,
  ): Promise<MenuMainCategory> {
    return this.menuMainCategoryService.createMenuMainCategory({
      menuId,
      mainCategoryId,
    });
  }
}
