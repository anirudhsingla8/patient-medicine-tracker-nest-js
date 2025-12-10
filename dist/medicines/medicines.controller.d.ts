import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
export declare class MedicinesController {
    private readonly medicinesService;
    constructor(medicinesService: MedicinesService);
    create(createMedicineDto: CreateMedicineDto, req: any): Promise<import("./entities/medicine.entity").Medicine>;
    findAll(): Promise<import("./entities/medicine.entity").Medicine[]>;
    findOne(id: string): Promise<import("./entities/medicine.entity").Medicine>;
    update(id: string, updateMedicineDto: UpdateMedicineDto): Promise<import("./entities/medicine.entity").Medicine>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
