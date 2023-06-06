import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuCategory } from './entities/menuCategory.entity';
import { MenuCategoryResolver } from './menuCategory.resolver';
import { MenuCategoryService } from './menuCategory.service';

@Module({
  imports: [TypeOrmModule.forFeature([MenuCategory])], //
  providers: [MenuCategoryResolver, MenuCategoryService],
})
export class MenuCategoryModule {}
