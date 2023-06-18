import { Module } from '@nestjs/common';
import { MenuOptionResolver } from './menuOption.resolver';
import { MenuOptionService } from './menuOption.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuOption } from './entities/menuOption.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MenuOption, //
    ]),
  ],
  providers: [
    MenuOptionResolver, //
    MenuOptionService,
  ],
})
export class MenuOptionModule {}
