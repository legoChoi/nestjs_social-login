import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserPositionService } from './userPosition.service';
import { UserPosition } from './entities/userPosition.entity';
import { UpdateResult } from 'typeorm';

@Resolver()
export class UserPositionResolver {
  constructor(
    private readonly userPositionService: UserPositionService, //
  ) {}

  @Mutation(() => UserPosition)
  createUserPosition(
    @Args('userId') userId: string,
    @Args('lat') lat: string,
    @Args('lng') lng: string,
  ): Promise<UserPosition> {
    return this.userPositionService.create({ userId, lat, lng });
  }

  // TODO:
  //   @Mutation(() => UpdateResult)
  //   setPositionToSelected(
  //     @Args('userId') userId: string, //
  //     @Args('posId') posId: string, //
  //   ): Promise<UpdateResult> {
  //     return this.userPositionService.setSelected({ userId, posId });
  //   }

  //   @Query(() => String)
  //   getDistance(
  //     @Args('userId01') userId01: String;
  //     @Args('userId02') userId02: String;
  //   ): string {
  //     return this.userPositionService.getDistance({userId01, userId02})
  //   }
}
