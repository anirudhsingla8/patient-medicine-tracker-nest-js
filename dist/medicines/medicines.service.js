"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicinesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const medicine_entity_1 = require("./entities/medicine.entity");
let MedicinesService = class MedicinesService {
    medicinesRepository;
    constructor(medicinesRepository) {
        this.medicinesRepository = medicinesRepository;
    }
    create(createMedicineDto, userId) {
        const medicine = this.medicinesRepository.create({ ...createMedicineDto, userId });
        return this.medicinesRepository.save(medicine);
    }
    findAll() {
        return this.medicinesRepository.find();
    }
    findAllByProfileId(profileId) {
        return this.medicinesRepository.find({ where: { profileId } });
    }
    async findOne(id) {
        const medicine = await this.medicinesRepository.findOneBy({ id });
        if (!medicine) {
            throw new common_1.NotFoundException(`Medicine with ID ${id} not found`);
        }
        return medicine;
    }
    async update(id, updateMedicineDto) {
        const medicine = await this.findOne(id);
        Object.assign(medicine, updateMedicineDto);
        return this.medicinesRepository.save(medicine);
    }
    async updateByProfileId(id, profileId, updateMedicineDto) {
        const medicine = await this.medicinesRepository.findOne({ where: { id, profileId } });
        if (!medicine) {
            throw new common_1.NotFoundException(`Medicine with ID ${id} not found for profile ${profileId}`);
        }
        Object.assign(medicine, updateMedicineDto);
        return this.medicinesRepository.save(medicine);
    }
    async remove(id) {
        const result = await this.medicinesRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Medicine with ID ${id} not found`);
        }
        return { deleted: true };
    }
    async removeByProfileId(id, profileId) {
        const result = await this.medicinesRepository.delete({ id, profileId });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Medicine with ID ${id} not found for profile ${profileId}`);
        }
        return { deleted: true };
    }
};
exports.MedicinesService = MedicinesService;
exports.MedicinesService = MedicinesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(medicine_entity_1.Medicine)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MedicinesService);
//# sourceMappingURL=medicines.service.js.map