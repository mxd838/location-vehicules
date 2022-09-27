import { Module } from '@nestjs/common';
import { RentingsService } from './rentings.service';
import { RentingsController } from './rentings.controller';

@Module({
  controllers: [RentingsController],
  providers: [RentingsService]
})
export class RentingsModule {}
