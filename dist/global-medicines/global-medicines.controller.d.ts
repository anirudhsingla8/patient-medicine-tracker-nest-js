import { GlobalMedicinesService } from './global-medicines.service';
import { CreateGlobalMedicineDto } from './dto/create-global-medicine.dto';
import { UpdateGlobalMedicineDto } from './dto/update-global-medicine.dto';
export declare class GlobalMedicinesController {
    private readonly globalMedicinesService;
    constructor(globalMedicinesService: GlobalMedicinesService);
    create(createGlobalMedicineDto: CreateGlobalMedicineDto): Promise<import("./entities/global-medicine.entity").GlobalMedicine>;
    findAll(): Promise<import("./entities/global-medicine.entity").GlobalMedicine[]>;
    findOne(id: string): Promise<import("./entities/global-medicine.entity").GlobalMedicine>;
    update(id: string, updateGlobalMedicineDto: UpdateGlobalMedicineDto): Promise<import("./entities/global-medicine.entity").GlobalMedicine>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
