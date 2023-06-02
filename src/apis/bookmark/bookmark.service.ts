import { Injectable } from '@nestjs/common';

@Injectable()
export class BookmarkService {
  testQuery() {
    return 'test bookmark';
  }
}
