import { Injectable } from '@nestjs/common';
import { Tag } from './entities/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>, //
  ) {}

  async create({ name }): Promise<Tag> {
    return await this.tagRepository.save({ name });
  }
}
