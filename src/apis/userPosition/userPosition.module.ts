import { Module } from '@nestjs/common';
import { UserPositionResolver } from './userPosition.resolver';
import { UserPositionService } from './userPosition.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPosition } from './entities/userPosition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserPosition])],
  providers: [UserPositionResolver, UserPositionService],
})
export class UserPositionModule {}
