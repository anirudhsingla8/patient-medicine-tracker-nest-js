import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GlobalMedicine } from './entities/global-medicine.entity';
import { CreateGlobalMedicineDto } from './dto/create-global-medicine.dto';
import { UpdateGlobalMedicineDto } from './dto/update-global-medicine.dto';

@Injectable()
@Injectable()
export class GlobalMedicinesService {
  constructor(
    @InjectRepository(GlobalMedicine)
    private globalMedicinesRepository: Repository<GlobalMedicine>,
  ) { }

  create(createGlobalMedicineDto: CreateGlobalMedicineDto) {
    const globalMedicine = this.globalMedicinesRepository.create(
      createGlobalMedicineDto,
    );
    return this.globalMedicinesRepository.save(globalMedicine);
  }

  findAll() {
    return this.globalMedicinesRepository.find();
  }

  async findOne(id: string) {
    const globalMedicine = await this.globalMedicinesRepository.findOneBy({
      id,
    });
    if (!globalMedicine) {
      throw new NotFoundException(`GlobalMedicine with ID ${id} not found`);
    }
    return globalMedicine;
  }

  async update(id: string, updateGlobalMedicineDto: UpdateGlobalMedicineDto) {
    const globalMedicine = await this.findOne(id);
    Object.assign(globalMedicine, updateGlobalMedicineDto);
    return this.globalMedicinesRepository.save(globalMedicine);
  }

  async remove(id: string) {
    const result = await this.globalMedicinesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`GlobalMedicine with ID ${id} not found`);
    }
    return { deleted: true };
  }
}
