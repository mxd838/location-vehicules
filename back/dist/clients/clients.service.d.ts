import { Client } from './interface/client.interface';
import { Model } from 'mongoose';
export declare class ClientsService {
    private readonly clientModel;
    constructor(clientModel: Model<Client>);
    create(client: Client): Promise<Client>;
    findAll(): Promise<Client[]>;
    findOne(id: string): Promise<Client>;
    update(id: string, client: Client): Promise<Client>;
    delete(id: string): Promise<Client>;
}
