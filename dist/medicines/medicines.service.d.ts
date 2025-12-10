import { Repository } from 'typeorm';
import { Medicine } from './entities/medicine.entity';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
export declare class MedicinesService {
    private medicinesRepository;
    constructor(medicinesRepository: Repository<Medicine>);
    create(createMedicineDto: CreateMedicineDto, userId: string): Promise<Medicine>;
    findAll(): Promise<Medicine[]>;
    findAllByProfileId(profileId: string): Promise<Medicine[]>;
    findOne(id: string): Promise<Medicine>;
    update(id: string, updateMedicineDto: UpdateMedicineDto): Promise<Medicine>;
    updateByProfileId(id: string, profileId: string, updateMedicineDto: UpdateMedicineDto): Promise<Medicine>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
    removeByProfileId(id: string, profileId: string): Promise<{
        deleted: boolean;
    }>;
}
