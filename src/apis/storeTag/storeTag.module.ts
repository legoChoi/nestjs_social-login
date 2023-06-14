import { Module } from '@nestjs/common';
import { StoreTagResolver } from './storeTag.resolver';
import { StoreTagService } from './storeTag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreTag } from './entities/storetag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoreTag])],
  providers: [StoreTagResolver, StoreTagService],
})
export class StoreTagModule {}
