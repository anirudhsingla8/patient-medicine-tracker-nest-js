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
exports.MedicinesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const medicines_service_1 = require("./medicines.service");
const create_medicine_dto_1 = require("./dto/create-medicine.dto");
const update_medicine_dto_1 = require("./dto/update-medicine.dto");
let MedicinesController = class MedicinesController {
    medicinesService;
    constructor(medicinesService) {
        this.medicinesService = medicinesService;
    }
    create(createMedicineDto, req) {
        return this.medicinesService.create(createMedicineDto, req.user.userId);
    }
    findAll(profileId) {
        if (profileId) {
            return this.medicinesService.findAllByProfileId(profileId);
        }
        return this.medicinesService.findAll();
    }
    findOne(id) {
        return this.medicinesService.findOne(id);
    }
    update(id, updateMedicineDto, profileId) {
        if (profileId) {
            return this.medicinesService.updateByProfileId(id, profileId, updateMedicineDto);
        }
        return this.medicinesService.update(id, updateMedicineDto);
    }
    remove(id, profileId) {
        if (profileId) {
            return this.medicinesService.removeByProfileId(id, profileId);
        }
        return this.medicinesService.remove(id);
    }
};
exports.MedicinesController = MedicinesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medicine_dto_1.CreateMedicineDto, Object]),
    __metadata("design:returntype", void 0)
], MedicinesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('profileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicinesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicinesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('profileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_medicine_dto_1.UpdateMedicineDto, String]),
    __metadata("design:returntype", void 0)
], MedicinesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('profileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], MedicinesController.prototype, "remove", null);
exports.MedicinesController = MedicinesController = __decorate([
    (0, common_1.Controller)('medicines'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [medicines_service_1.MedicinesService])
], MedicinesController);
//# sourceMappingURL=medicines.controller.js.map