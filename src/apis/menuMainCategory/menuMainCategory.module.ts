import { Module } from '@nestjs/common';
import { MenuMainCategoryResolver } from './menuMainCategory.resolver';
import { MenuMainCategoryService } from './menuMainCategory.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuMainCategory } from './entities/menuMainCategory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuMainCategory])], //
  providers: [
    MenuMainCategoryResolver, //
    MenuMainCategoryService,
  ],
})
export class MenuMainCategoryModule {}
