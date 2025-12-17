import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
export declare class MedicinesController {
    private readonly medicinesService;
    constructor(medicinesService: MedicinesService);
    create(createMedicineDto: CreateMedicineDto, req: any): Promise<import("./entities/medicine.entity").Medicine>;
    findAll(profileId?: string): Promise<import("./entities/medicine.entity").Medicine[]>;
    findOne(id: string): Promise<import("./entities/medicine.entity").Medicine>;
    update(id: string, updateMedicineDto: UpdateMedicineDto, profileId?: string): Promise<import("./entities/medicine.entity").Medicine>;
    remove(id: string, profileId?: string): Promise<{
        deleted: boolean;
    }>;
}
