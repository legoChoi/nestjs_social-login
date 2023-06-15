import { Module } from '@nestjs/common';
import { StoreImageResolver } from './storeImage.resolver';
import { StoreImageService } from './storeImage.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreImage } from './entities/storeImage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoreImage])],
  providers: [StoreImageResolver, StoreImageService],
})
export class StoreImageModule {}
