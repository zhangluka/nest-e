import { Test, TestingModule } from '@nestjs/testing';
import { HdService } from './hd.service';

describe('HdService', () => {
  let service: HdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HdService],
    }).compile();

    service = module.get<HdService>(HdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
