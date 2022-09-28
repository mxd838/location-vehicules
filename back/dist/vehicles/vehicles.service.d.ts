import { Vehicle } from './interface/vehicle.interface';
import { Model } from 'mongoose';
export declare class VehiclesService {
    private readonly vehicleModel;
    constructor(vehicleModel: Model<Vehicle>);
    create(vehicle: Vehicle): Promise<Vehicle>;
    findAll(): Promise<Vehicle[]>;
    findOne(id: number): Promise<Vehicle>;
    update(id: number, vehicle: Vehicle): Promise<Vehicle>;
    delete(id: number): Promise<Vehicle>;
}
