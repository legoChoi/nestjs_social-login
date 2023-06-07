import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuResolver } from './menu.resolver';
import { MenuService } from './menu.service';
import { Menu } from './entities/menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Menu])], //
  providers: [
    MenuResolver, //
    MenuService,
  ],
})
export class MenuModule {}
