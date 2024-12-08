import { HdModule } from './hd/hd.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BbService } from './bb/bb.service';
import { TestModule } from './test/test.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [TestModule, HdModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService, BbService],
})
export class AppModule {}
