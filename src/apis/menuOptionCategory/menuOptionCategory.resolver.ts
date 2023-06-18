import { Resolver } from '@nestjs/graphql';
import { MenuOptionCategory } from './entities/menuOptionCategory.entity';

@Resolver()
export class MenuOptionCategoryResolver {
  constructor(
    private readonly menuOptionCategoryService: MenuOptionCategory, //
  ) {}
}
