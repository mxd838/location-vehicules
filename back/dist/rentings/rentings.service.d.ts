import { Renting } from './interface/renting.interface';
import { Model } from 'mongoose';
export declare class RentingsService {
    private readonly rentingModel;
    constructor(rentingModel: Model<Renting>);
    create(renting: Renting): Promise<Renting>;
    findAll(): Promise<Renting[]>;
    findOne(id: number): Promise<Renting>;
    update(id: number, renting: Renting): Promise<Renting>;
    delete(id: number): Promise<Renting>;
}
