import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MenuService } from './menu.service';
import { Menu } from './entities/menu.entity';

@Resolver()
export class MenuResolver {
  constructor(
    private readonly menuService: MenuService, //
  ) {}

  // @Mutation(() => Menu)
  // createMenu(
  //   @Args('name') name: string, //
  //   @Args('storeId') storeId: string,
  // ): Promise<Menu> {
  //   return this.menuService.createMenu({ name, storeId });
  // }
}
