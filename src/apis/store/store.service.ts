import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
  ) {}

  async create({ name }) {
    const store = await this.storeRepository.save({ name });
    return name;
  }

  // 매장 상세화면
  async fetchAll(): Promise<Store[]> {
    return await this.storeRepository.find({
      relations: ['storeTag', 'storeTag.tag'],
    });
  }

  async fetchWithMenusAndTags({ storeId }): Promise<Store> {
    return await this.storeRepository.findOne({
      where: { id: storeId },
      relations: ['menu', 'storeTag', 'storeTag.tag'],
    });
  }
}
