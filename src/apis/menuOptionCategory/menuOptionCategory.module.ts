import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuOptionCategory } from './entities/menuOptionCategory.entity';
import { MenuOptionCategoryResolver } from './menuOptionCategory.resolver';
import { MenuOptionCategoryService } from './menuOptionCategory.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MenuOptionCategory, //
    ]),
  ],
  providers: [
    MenuOptionCategoryResolver, //
    MenuOptionCategoryService,
  ],
})
export class MenuOptionCategoryModule {}
