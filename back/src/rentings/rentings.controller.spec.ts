import { Test, TestingModule } from '@nestjs/testing';
import { RentingsController } from './rentings.controller';
import { RentingsService } from './rentings.service';

describe('RentingsController', () => {
  let controller: RentingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentingsController],
      providers: [RentingsService],
    }).compile();

    controller = module.get<RentingsController>(RentingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
