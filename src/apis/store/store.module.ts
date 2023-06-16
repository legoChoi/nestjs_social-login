import { Module } from '@nestjs/common';
import { StoreResolver } from './store.resolver';
import { StoreService } from './store.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { MainCategoryService } from '../mainCategory/mainCategory.service';

@Module({
  imports: [TypeOrmModule.forFeature([Store])],
  providers: [StoreResolver, StoreService],
})
export class StoreModule {}
