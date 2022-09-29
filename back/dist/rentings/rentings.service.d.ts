import { Renting } from './interface/renting.interface';
import { Model } from 'mongoose';
export declare class RentingsService {
    private readonly rentingModel;
    constructor(rentingModel: Model<Renting>);
    create(renting: Renting): Promise<Renting>;
    findAll(): Promise<Renting[]>;
    findOne(id: string): Promise<Renting>;
    update(id: string, renting: Renting): Promise<Renting>;
    delete(id: string): Promise<Renting>;
}
