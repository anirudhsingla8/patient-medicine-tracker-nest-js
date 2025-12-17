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
exports.IntakesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const intake_entity_1 = require("./entities/intake.entity");
let IntakesService = class IntakesService {
    intakesRepository;
    constructor(intakesRepository) {
        this.intakesRepository = intakesRepository;
    }
    async create(createIntakeDto) {
        const intake = this.intakesRepository.create(createIntakeDto);
        return await this.intakesRepository.save(intake);
    }
    async findAll(filterDto) {
        const { profileId, medicineId, startDate, endDate } = filterDto;
        const query = this.intakesRepository.createQueryBuilder('intake');
        query.where('intake.profileId = :profileId', { profileId });
        if (medicineId) {
            query.andWhere('intake.medicineId = :medicineId', { medicineId });
        }
        if (startDate && endDate) {
            query.andWhere('intake.takenAt BETWEEN :startDate AND :endDate', {
                startDate,
                endDate,
            });
        }
        query.orderBy('intake.takenAt', 'DESC');
        return await query.getMany();
    }
};
exports.IntakesService = IntakesService;
exports.IntakesService = IntakesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(intake_entity_1.MedicineIntake)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], IntakesService);
//# sourceMappingURL=intakes.service.js.map