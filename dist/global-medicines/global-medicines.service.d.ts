import { Repository } from 'typeorm';
import { GlobalMedicine } from './entities/global-medicine.entity';
import { CreateGlobalMedicineDto } from './dto/create-global-medicine.dto';
import { UpdateGlobalMedicineDto } from './dto/update-global-medicine.dto';
export declare class GlobalMedicinesService {
    private globalMedicinesRepository;
    constructor(globalMedicinesRepository: Repository<GlobalMedicine>);
    create(createGlobalMedicineDto: CreateGlobalMedicineDto): Promise<GlobalMedicine>;
    findAll(): Promise<GlobalMedicine[]>;
    findOne(id: string): Promise<GlobalMedicine>;
    update(id: string, updateGlobalMedicineDto: UpdateGlobalMedicineDto): Promise<GlobalMedicine>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
