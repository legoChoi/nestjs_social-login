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

  async createStore({ name }) {
    const store = await this.storeRepository.save({ name });
    return name;
  }

  async fetchOneStore({ id }): Promise<Store> {
    const store = this.storeRepository.findOne({ where: { id } });
    return store;
  }

  async fetchAllStore(): Promise<Store[]> {
    const store = this.storeRepository.find();
    return store;
  }
}
