import { Query, Resolver } from '@nestjs/graphql';
import { MainCategoryService } from './mainCategory.service';

@Resolver()
export class MainCategoryResolver {
  constructor(private readonly menuCategoryService: MainCategoryService) {}

  @Query(() => String)
  testMenuCategory(): string {
    return this.menuCategoryService.test();
  }
}
