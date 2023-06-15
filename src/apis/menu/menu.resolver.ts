import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MenuService } from './menu.service';
import { Menu } from './entities/menu.entity';

@Resolver()
export class MenuResolver {
  constructor(
    private readonly menuService: MenuService, //
  ) {}

  @Mutation(
    () => Menu, //
    { description: '[TEST] 메뉴 생성' },
  )
  createMenu(
    @Args('name') name: string, //
    @Args('storeId') storeId: string,
  ): Promise<Menu> {
    return this.menuService.createMenu({ name, storeId });
  }

  @Query(
    () => [Menu], //
    {
      description: '[매장 상세 - 메뉴 탭] 메뉴 리스트 가져오기',
    },
  )
  fetchAllMenu(
    @Args('storeId') storeId: string, //
  ): Promise<Menu[]> {
    return this.menuService.fetchAll({ storeId });
  }
}
