import { ProfilesService } from './profiles.service';
import { MedicinesService } from '../medicines/medicines.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { CreateMedicineDto } from '../medicines/dto/create-medicine.dto';
import { UpdateMedicineDto } from '../medicines/dto/update-medicine.dto';
export declare class ProfilesController {
    private readonly profilesService;
    private readonly medicinesService;
    constructor(profilesService: ProfilesService, medicinesService: MedicinesService);
    create(createProfileDto: CreateProfileDto, req: any): Promise<import("./entities/profile.entity").Profile>;
    findAll(): Promise<import("./entities/profile.entity").Profile[]>;
    findOne(id: string): Promise<import("./entities/profile.entity").Profile>;
    getMedicines(id: string): Promise<import("../medicines/entities/medicine.entity").Medicine[]>;
    createMedicine(id: string, createMedicineDto: CreateMedicineDto, req: any): Promise<import("../medicines/entities/medicine.entity").Medicine>;
    updateMedicine(profileId: string, medicineId: string, updateMedicineDto: UpdateMedicineDto): Promise<import("../medicines/entities/medicine.entity").Medicine>;
    removeMedicine(profileId: string, medicineId: string): Promise<{
        deleted: boolean;
    }>;
    update(id: string, updateProfileDto: UpdateProfileDto): Promise<import("./entities/profile.entity").Profile>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
