import { Test, TestingModule } from '@nestjs/testing';
import { HdController } from './hd.controller';

describe('HdController', () => {
  let controller: HdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HdController],
    }).compile();

    controller = module.get<HdController>(HdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
