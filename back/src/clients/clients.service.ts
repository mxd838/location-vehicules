import { Injectable } from '@nestjs/common';
import { Client } from './interface/client.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel('Client') private readonly clientModel: Model<Client>,
  ) {}

  async create(client: Client): Promise<Client> {
    const newClient = new this.clientModel(client);
    return await newClient.save();
  }

  async findAll(): Promise<Client[]> {
    return await this.clientModel.find();
  }

  async findOne(id: number): Promise<Client> {
    return await this.clientModel.findById({ _id: id });
  }

  async update(id: number, client: Client): Promise<Client> {
    return await this.clientModel.findByIdAndUpdate(id, client, { new: true });
  }

  async delete(id: number): Promise<Client> {
    return await this.clientModel.findByIdAndRemove(id);
  }
}
