import { Controller, Get } from '@nestjs/common';
import { TestService } from '../test/test.service';

@Controller('hd')
export class HdController {
  constructor(private readonly testService: TestService) {}
  @Get()
  show() {
    return this.testService.test();
  }
}
