import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuMainCategoryService {
  constructor() {}

  test(): string {
    return 'test menu main category';
  }
}
