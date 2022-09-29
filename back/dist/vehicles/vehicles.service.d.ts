import { Vehicle } from './interface/vehicle.interface';
import { Model } from 'mongoose';
export declare class VehiclesService {
    private readonly vehicleModel;
    constructor(vehicleModel: Model<Vehicle>);
    create(vehicle: Vehicle): Promise<Vehicle>;
    findAll(): Promise<Vehicle[]>;
    findOne(id: string): Promise<Vehicle>;
    update(id: string, vehicle: Vehicle): Promise<Vehicle>;
    delete(id: string): Promise<Vehicle>;
}
