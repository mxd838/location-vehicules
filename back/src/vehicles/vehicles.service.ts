import { Injectable } from '@nestjs/common';
import { Vehicle } from './interface/vehicle.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectModel('Vehicle') private readonly vehicleModel: Model<Vehicle>,
  ) {}

  async create(vehicle: Vehicle): Promise<Vehicle> {
    const newVehicle = new this.vehicleModel(vehicle);
    return await newVehicle.save();
  }

  async findAll(): Promise<Vehicle[]> {
    return await this.vehicleModel.find();
  }

  async findOne(id: number): Promise<Vehicle> {
    return await this.vehicleModel.findById({ _id: id });
  }

  async update(id: number, vehicle: Vehicle): Promise<Vehicle> {
    return await this.vehicleModel.findByIdAndUpdate(id, vehicle, {
      new: true,
    });
  }

  async delete(id: number): Promise<Vehicle> {
    return await this.vehicleModel.findByIdAndRemove(id);
  }
}
