import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GlobalMedicinesService } from './global-medicines.service';
import { CreateGlobalMedicineDto } from './dto/create-global-medicine.dto';
import { UpdateGlobalMedicineDto } from './dto/update-global-medicine.dto';

@Controller('global-medicines')
export class GlobalMedicinesController {
  constructor(private readonly globalMedicinesService: GlobalMedicinesService) { }

  @Post()
  create(@Body() createGlobalMedicineDto: CreateGlobalMedicineDto) {
    return this.globalMedicinesService.create(createGlobalMedicineDto);
  }

  @Get()
  findAll() {
    return this.globalMedicinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.globalMedicinesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGlobalMedicineDto: UpdateGlobalMedicineDto) {
    return this.globalMedicinesService.update(id, updateGlobalMedicineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.globalMedicinesService.remove(id);
  }
}
