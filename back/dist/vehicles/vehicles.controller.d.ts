import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Vehicle } from './interface/vehicle.interface';
export declare class VehiclesController {
    private readonly vehiclesService;
    constructor(vehiclesService: VehiclesService);
    create(createVehicleDto: CreateVehicleDto): Promise<Vehicle>;
    findAll(): Promise<Vehicle[]>;
    findOne(id: any): Promise<Vehicle>;
    update(id: any, updateVehicleDto: CreateVehicleDto): Promise<Vehicle>;
    delete(id: any): Promise<Vehicle>;
}
