import { Resolver } from '@nestjs/graphql';
import { MenuOptionService } from './menuOption.service';

@Resolver()
export class MenuOptionResolver {
  constructor(
    private readonly menuOptionService: MenuOptionService, //
  ) {}
}
