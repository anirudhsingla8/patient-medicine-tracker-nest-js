import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medicine } from './entities/medicine.entity';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';

@Injectable()
export class MedicinesService {
  constructor(
    @InjectRepository(Medicine)
    private medicinesRepository: Repository<Medicine>,
  ) { }

  create(createMedicineDto: CreateMedicineDto, userId: string) {
    const medicine = this.medicinesRepository.create({ ...createMedicineDto, userId });
    return this.medicinesRepository.save(medicine);
  }

  findAll() {
    return this.medicinesRepository.find();
  }

  findAllByProfileId(profileId: string) {
    return this.medicinesRepository.find({ where: { profileId } });
  }

  async findOne(id: string) {
    const medicine = await this.medicinesRepository.findOneBy({ id });
    if (!medicine) {
      throw new NotFoundException(`Medicine with ID ${id} not found`);
    }
    return medicine;
  }

  async update(id: string, updateMedicineDto: UpdateMedicineDto) {
    const medicine = await this.findOne(id);
    Object.assign(medicine, updateMedicineDto);
    return this.medicinesRepository.save(medicine);
  }

  async updateByProfileId(id: string, profileId: string, updateMedicineDto: UpdateMedicineDto) {
    const medicine = await this.medicinesRepository.findOne({ where: { id, profileId } });
    if (!medicine) {
      throw new NotFoundException(`Medicine with ID ${id} not found for profile ${profileId}`);
    }
    Object.assign(medicine, updateMedicineDto);
    return this.medicinesRepository.save(medicine);
  }

  async remove(id: string) {
    const result = await this.medicinesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Medicine with ID ${id} not found`);
    }
    return { deleted: true };
  }

  async removeByProfileId(id: string, profileId: string) {
    const result = await this.medicinesRepository.delete({ id, profileId });
    if (result.affected === 0) {
      throw new NotFoundException(`Medicine with ID ${id} not found for profile ${profileId}`);
    }
    return { deleted: true };
  }
}
