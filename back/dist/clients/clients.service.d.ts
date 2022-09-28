import { Client } from './interface/client.interface';
import { Model } from 'mongoose';
export declare class ClientsService {
    private readonly clientModel;
    constructor(clientModel: Model<Client>);
    create(client: Client): Promise<Client>;
    findAll(): Promise<Client[]>;
    findOne(id: number): Promise<Client>;
    update(id: number, client: Client): Promise<Client>;
    delete(id: number): Promise<Client>;
}
