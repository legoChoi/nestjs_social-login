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

  async fetchOne({ id }): Promise<Store> {
    const store = this.storeRepository.findOne({ where: { id } });
    return store;
  }

  async fetchAll(): Promise<Store[]> {
    const store = this.storeRepository.find();
    return store;
  }

  async fetchWithAllMenu({ storeId }): Promise<Store[]> {
    return await this.storeRepository.find({
      relations: ['menu'],
    });
  }
}
