import { Module } from '@nestjs/common';
import { StoreTagResolver } from './storeTag.resolver';
import { StoreTagService } from './storeTag.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [StoreTagResolver, StoreTagService],
})
export class StoreTagModule {}
