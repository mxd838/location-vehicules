import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RentingsModule } from './rentings/rentings.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { ClientsModule } from './clients/clients.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [
    RentingsModule,
    VehiclesModule,
    ClientsModule,
    MongooseModule.forRoot(config.mongoURI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
