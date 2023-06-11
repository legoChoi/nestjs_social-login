import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  //
  async fetchAllByStoreId({ storeId }): Promise<Review[]> {
    const review = await this.reviewRepository.find({
      where: { store: storeId },
    });

    return review;
  }

  //
  async fetchAllByUserId({ userId }): Promise<Review[]> {
    const review = await this.reviewRepository.find({
      where: { user: userId },
    });

    return review;
  }

  //
  async create() {}

  //
  async delete() {}
}
