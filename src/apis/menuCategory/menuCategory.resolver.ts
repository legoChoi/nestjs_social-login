import { Query, Resolver } from '@nestjs/graphql';
import { MenuCategoryService } from './menuCategory.service';

@Resolver()
export class MenuCategoryResolver {
  constructor(private readonly menuCategoryService: MenuCategoryService) {}

  @Query(() => String)
  testMenuCategory(): string {
    return this.menuCategoryService.test();
  }
}
