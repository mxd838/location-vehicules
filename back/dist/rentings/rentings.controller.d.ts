import { RentingsService } from './rentings.service';
import { CreateRentingDto } from './dto/create-renting.dto';
import { Renting } from './interface/renting.interface';
export declare class RentingsController {
    private readonly rentingsService;
    constructor(rentingsService: RentingsService);
    create(createRentingDto: CreateRentingDto): Promise<Renting>;
    findAll(): Promise<Renting[]>;
    findOne(id: any): Promise<Renting>;
    update(id: string, updateRentingDto: CreateRentingDto): Promise<Renting>;
    delete(id: string): Promise<Renting>;
}
