import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RentingsService } from './rentings.service';
import { RentingsController } from './rentings.controller';
import { RentingSchema } from './schema/renting.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Renting', schema: RentingSchema }]),
  ],
  controllers: [RentingsController],
  providers: [RentingsService],
})
export class RentingsModule {}
