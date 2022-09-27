import { Test, TestingModule } from '@nestjs/testing';
import { RentingsService } from './rentings.service';

describe('RentingsService', () => {
  let service: RentingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentingsService],
    }).compile();

    service = module.get<RentingsService>(RentingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
