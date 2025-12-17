import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';

@Controller('medicines')
@UseGuards(JwtAuthGuard)
export class MedicinesController {
  constructor(private readonly medicinesService: MedicinesService) { }

  @Post()
  create(@Body() createMedicineDto: CreateMedicineDto, @Request() req) {
    return this.medicinesService.create(createMedicineDto, req.user.userId);
  }

  @Get()
  findAll(@Query('profileId') profileId?: string) {
    if (profileId) {
      return this.medicinesService.findAllByProfileId(profileId);
    }
    return this.medicinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicinesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMedicineDto: UpdateMedicineDto,
    @Query('profileId') profileId?: string,
  ) {
    if (profileId) {
      return this.medicinesService.updateByProfileId(id, profileId, updateMedicineDto);
    }
    return this.medicinesService.update(id, updateMedicineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Query('profileId') profileId?: string) {
    if (profileId) {
      return this.medicinesService.removeByProfileId(id, profileId);
    }
    return this.medicinesService.remove(id);
  }
}
