import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  // constructor() {}
  @Get()
  getConfig() {
    return '';
  }
}
