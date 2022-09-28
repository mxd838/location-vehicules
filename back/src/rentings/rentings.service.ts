import { Injectable } from '@nestjs/common';
import { Renting } from './interface/renting.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RentingsService {
  constructor(
    @InjectModel('Renting') private readonly rentingModel: Model<Renting>,
  ) {}

  async create(renting: Renting): Promise<Renting> {
    const newRenting = new this.rentingModel(renting);
    return await newRenting.save();
  }

  async findAll(): Promise<Renting[]> {
    return await this.rentingModel.find();
  }

  async findOne(id: number): Promise<Renting> {
    return await this.rentingModel.findById({ _id: id });
  }

  async update(id: number, renting: Renting): Promise<Renting> {
    return await this.rentingModel.findByIdAndUpdate(id, renting, {
      new: true,
    });
  }

  async delete(id: number): Promise<Renting> {
    return await this.rentingModel.findByIdAndRemove(id);
  }
}
