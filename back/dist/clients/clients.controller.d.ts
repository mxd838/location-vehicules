import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './interface/client.interface';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    create(createClientDto: CreateClientDto): Promise<Client>;
    findAll(): Promise<Client[]>;
    findOne(id: any): Promise<Client>;
    update(id: any, updateClientDto: CreateClientDto): Promise<Client>;
    remove(id: string): Promise<Client>;
}
