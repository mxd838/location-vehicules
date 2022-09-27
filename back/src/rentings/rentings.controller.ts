import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RentingsService } from './rentings.service';
import { CreateRentingDto } from './dto/create-renting.dto';
import { UpdateRentingDto } from './dto/update-renting.dto';

@Controller('rentings')
export class RentingsController {
  constructor(private readonly rentingsService: RentingsService) {}

  @Post()
  create(@Body() createRentingDto: CreateRentingDto) {
    return this.rentingsService.create(createRentingDto);
  }

  @Get()
  findAll() {
    return this.rentingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentingDto: UpdateRentingDto) {
    return this.rentingsService.update(+id, updateRentingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentingsService.remove(+id);
  }
}
