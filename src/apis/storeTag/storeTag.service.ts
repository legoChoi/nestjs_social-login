import { Injectable } from '@nestjs/common';
import { StoreTag } from './entities/storeTag.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IStoreTagServiceCreate } from './interfaces/storeTag-service.interface';

@Injectable()
export class StoreTagService {
  constructor(
    @InjectRepository(StoreTag)
    private readonly storeTagRepository: Repository<StoreTag>, //
  ) {}

  async connect(
    { createStoreTagInput }: IStoreTagServiceCreate, //
  ): Promise<StoreTag> {
    const { storeId, tagId } = createStoreTagInput;

    return await this.storeTagRepository.save({});
  }
}
