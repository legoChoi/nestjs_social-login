import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MenuService } from './menu.service';

@Resolver()
export class MenuResolver {
  constructor(
    private readonly menuService: MenuService, //
  ) {}

  @Mutation(() => String)
  createMenu(
    @Args('name') name: string, //
    @Args('storeId') storeId: string,
  ) {
    return this.menuService.createMenu({ name, storeId });
  }
}
