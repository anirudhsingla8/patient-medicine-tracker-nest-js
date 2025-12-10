import { Controller, Get, Post, Put, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProfilesService } from './profiles.service';
import { MedicinesService } from '../medicines/medicines.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { CreateMedicineDto } from '../medicines/dto/create-medicine.dto';
import { UpdateMedicineDto } from '../medicines/dto/update-medicine.dto';

@Controller('profiles')
@UseGuards(JwtAuthGuard)
export class ProfilesController {
  constructor(
    private readonly profilesService: ProfilesService,
    private readonly medicinesService: MedicinesService,
  ) { }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto, @Request() req) {
    return this.profilesService.create(createProfileDto, req.user.userId);
  }

  @Get()
  findAll() {
    return this.profilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilesService.findOne(id);
  }

  @Get(':id/medicines')
  getMedicines(@Param('id') id: string) {
    return this.medicinesService.findAllByProfileId(id);
  }

  @Post(':id/medicines')
  createMedicine(
    @Param('id') id: string,
    @Body() createMedicineDto: CreateMedicineDto,
    @Request() req,
  ) {
    return this.medicinesService.create(
      { ...createMedicineDto, profileId: id },
      req.user.userId,
    );
  }

  @Put(':id/medicines/:medicineId')
  updateMedicine(
    @Param('id') profileId: string,
    @Param('medicineId') medicineId: string,
    @Body() updateMedicineDto: UpdateMedicineDto,
  ) {
    return this.medicinesService.updateByProfileId(medicineId, profileId, updateMedicineDto);
  }

  @Delete(':id/medicines/:medicineId')
  removeMedicine(
    @Param('id') profileId: string,
    @Param('medicineId') medicineId: string,
  ) {
    return this.medicinesService.removeByProfileId(medicineId, profileId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService.update(id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profilesService.remove(id);
  }
}
