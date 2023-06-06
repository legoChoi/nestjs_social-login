import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuResolver } from './menu.resolver';
import { MenuService } from './menu.service';

@Module({
  imports: [TypeOrmModule.forFeature([])], //
  providers: [
    MenuResolver, //
    MenuService,
  ],
})
export class MenuModule {}
