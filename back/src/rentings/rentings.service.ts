import { Injectable } from '@nestjs/common';
import { CreateRentingDto } from './dto/create-renting.dto';
import { UpdateRentingDto } from './dto/update-renting.dto';

@Injectable()
export class RentingsService {
  create(createRentingDto: CreateRentingDto) {
    return 'This action adds a new renting';
  }

  findAll() {
    return `This action returns all rentings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} renting`;
  }

  update(id: number, updateRentingDto: UpdateRentingDto) {
    return `This action updates a #${id} renting`;
  }

  remove(id: number) {
    return `This action removes a #${id} renting`;
  }
}
