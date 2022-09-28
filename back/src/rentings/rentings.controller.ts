import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { RentingsService } from './rentings.service';
import { CreateRentingDto } from './dto/create-renting.dto';
import { Renting } from './interface/renting.interface';

@Controller('rentings')
export class RentingsController {
  constructor(private readonly rentingsService: RentingsService) {}

  @Post()
  create(@Body() createRentingDto: CreateRentingDto): Promise<Renting> {
    return this.rentingsService.create(createRentingDto);
  }

  @Get()
  findAll(): Promise<Renting[]> {
    return this.rentingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Renting> {
    return this.rentingsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateRentingDto: CreateRentingDto,
  ): Promise<Renting> {
    return this.rentingsService.update(+id, updateRentingDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.rentingsService.delete(+id);
  }
}
