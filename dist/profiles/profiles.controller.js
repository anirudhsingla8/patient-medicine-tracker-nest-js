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
exports.ProfilesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const profiles_service_1 = require("./profiles.service");
const medicines_service_1 = require("../medicines/medicines.service");
const create_profile_dto_1 = require("./dto/create-profile.dto");
const update_profile_dto_1 = require("./dto/update-profile.dto");
const create_medicine_dto_1 = require("../medicines/dto/create-medicine.dto");
const update_medicine_dto_1 = require("../medicines/dto/update-medicine.dto");
let ProfilesController = class ProfilesController {
    profilesService;
    medicinesService;
    constructor(profilesService, medicinesService) {
        this.profilesService = profilesService;
        this.medicinesService = medicinesService;
    }
    create(createProfileDto, req) {
        return this.profilesService.create(createProfileDto, req.user.userId);
    }
    findAll() {
        return this.profilesService.findAll();
    }
    findOne(id) {
        return this.profilesService.findOne(id);
    }
    getMedicines(id) {
        return this.medicinesService.findAllByProfileId(id);
    }
    createMedicine(id, createMedicineDto, req) {
        return this.medicinesService.create({ ...createMedicineDto, profileId: id }, req.user.userId);
    }
    updateMedicine(profileId, medicineId, updateMedicineDto) {
        return this.medicinesService.updateByProfileId(medicineId, profileId, updateMedicineDto);
    }
    removeMedicine(profileId, medicineId) {
        return this.medicinesService.removeByProfileId(medicineId, profileId);
    }
    update(id, updateProfileDto) {
        return this.profilesService.update(id, updateProfileDto);
    }
    remove(id) {
        return this.profilesService.remove(id);
    }
};
exports.ProfilesController = ProfilesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_profile_dto_1.CreateProfileDto, Object]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/medicines'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "getMedicines", null);
__decorate([
    (0, common_1.Post)(':id/medicines'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_medicine_dto_1.CreateMedicineDto, Object]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "createMedicine", null);
__decorate([
    (0, common_1.Put)(':id/medicines/:medicineId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('medicineId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_medicine_dto_1.UpdateMedicineDto]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "updateMedicine", null);
__decorate([
    (0, common_1.Delete)(':id/medicines/:medicineId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('medicineId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "removeMedicine", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_profile_dto_1.UpdateProfileDto]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "remove", null);
exports.ProfilesController = ProfilesController = __decorate([
    (0, common_1.Controller)('profiles'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [profiles_service_1.ProfilesService,
        medicines_service_1.MedicinesService])
], ProfilesController);
//# sourceMappingURL=profiles.controller.js.map