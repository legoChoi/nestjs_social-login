import { Injectable } from '@nestjs/common';
import { StoreTag } from './entities/storeTag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StoreTagService {
  constructor(private readonly storeTagRepository: Repository<StoreTag>) {}

  // async connect({ storeId, tagId }): Promise<StoreTag> {
  //   return await this.storeTagRepository.save({});
  // }

  fetchOne() {}

  fetchAll() {}
}
