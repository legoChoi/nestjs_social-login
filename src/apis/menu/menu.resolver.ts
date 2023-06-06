import { Query, Resolver } from '@nestjs/graphql';
import { MenuService } from './menu.service';

@Resolver()
export class MenuResolver {
  constructor(
    private readonly menuService: MenuService, //
  ) {}

  @Query(() => String)
  testMenu(): string {
    return this.menuService.test();
  }
}
