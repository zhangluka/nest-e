import { Injectable } from '@nestjs/common';

@Injectable()
export class HdService {
  getHello() {
    return 'Hello World!';
  }
}
