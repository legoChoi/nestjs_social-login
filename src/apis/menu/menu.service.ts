import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuService {
  test(): string {
    return 'menu test';
  }
}
