import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StoreService } from './store.service';
import { Store } from './entities/store.entity';

@Resolver()
export class StoreResolver {
  constructor(
    private readonly storeService: StoreService, //
  ) {}

  //
  //
  @Mutation(
    () => String, //
    { description: '[TEST] 매장 생성' },
  )
  createStore(
    @Args('name') name: string, //
  ) {
    return this.storeService.create({ name });
  }

  //
  // 매장 리스트 화면
  // 이미지, 생성일, 태그, 이름, 별점, 거리
  @Query(
    () => [Store], //
    { description: '[매장 리스트] 매장 리스트 가져오기' },
  )
  fetchStoreList(): Promise<Store[]> {
    return this.storeService.fetchAll();
  }

  //
  // 매장 상세 (상단)
  // 가게 사진, 태그, 이름, 위치, 별점, 찜(유저가 선택했는지 안했는지)
  // 호출 시 메뉴까지 불러오게?
  @Query(
    () => Store, //
    { description: '[매장 상세] 매장 상세 가져오기' },
  )
  fetchOneStoreByStoreId(
    @Args('storeId') storeId: string, //
  ): Promise<Store> {
    return this.storeService.fetchWithMenusAndTags({ storeId });
  }
}
