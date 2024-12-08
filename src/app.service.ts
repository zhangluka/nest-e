import { BbService } from './bb/bb.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly bbService: BbService) {}
  getHello() {
    return this.bbService.hd();
  }
}
