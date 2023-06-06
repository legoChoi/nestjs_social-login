import { Query, Resolver } from '@nestjs/graphql';
import { MenuMainCategoryService } from './menuMainCategory.service';

@Resolver()
export class MenuMainCategoryResolver {
  constructor(
    private readonly menuMainCategoryService: MenuMainCategoryService, //
  ) {}

  @Query(() => String)
  testMenuMainCategory(): string {
    return this.menuMainCategoryService.test();
  }
}
