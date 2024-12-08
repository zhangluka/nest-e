import { DynamicModule, Global, Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Global()
@Module({
  providers: [TestService],
  controllers: [TestController],
  exports: [TestService],
})
export class TestModule {
  static register(): DynamicModule {
    return {
      module: TestModule,
      providers: [TestService],
      controllers: [TestController],
      exports: [TestService],
    };
  }
}
