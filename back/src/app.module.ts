import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RentingsModule } from './rentings/rentings.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [RentingsModule, VehiclesModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
