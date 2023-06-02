import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreService {
  getText(): string {
    return 'store test';
  }
}
