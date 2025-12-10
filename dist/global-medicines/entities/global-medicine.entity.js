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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalMedicine = void 0;
const typeorm_1 = require("typeorm");
let GlobalMedicine = class GlobalMedicine {
    id;
    name;
    brandName;
    genericName;
    dosageForm;
    strength;
    manufacturer;
    description;
    indications;
    contraindications;
    sideEffects;
    warnings;
    interactions;
    storageInstructions;
    category;
    atcCode;
    fdaApprovalDate;
    createdAt;
    updatedAt;
};
exports.GlobalMedicine = GlobalMedicine;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GlobalMedicine.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GlobalMedicine.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'brand_name', nullable: true }),
    __metadata("design:type", String)
], GlobalMedicine.prototype, "brandName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'generic_name', nullable: true }),
    __metadata("design:type", String)
], GlobalMedicine.prototype, "genericName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dosage_form', nullable: true }),
    __metadata("design:type", String)
], GlobalMedicine.prototype, "dosageForm", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GlobalMedicine.prototype, "strength", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GlobalMedicine.prototype, "manufacturer", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GlobalMedicine.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Array)
], GlobalMedicine.prototype, "indications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Array)
], GlobalMedicine.prototype, "contraindications", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'side_effects', type: 'jsonb', nullable: true }),
    __metadata("design:type", Array)
], GlobalMedicine.prototype, "sideEffects", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Array)
], GlobalMedicine.prototype, "warnings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Array)
], GlobalMedicine.prototype, "interactions", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'storage_instructions', nullable: true }),
    __metadata("design:type", String)
], GlobalMedicine.prototype, "storageInstructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GlobalMedicine.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'atc_code', nullable: true }),
    __metadata("design:type", String)
], GlobalMedicine.prototype, "atcCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fda_approval_date', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], GlobalMedicine.prototype, "fdaApprovalDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], GlobalMedicine.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], GlobalMedicine.prototype, "updatedAt", void 0);
exports.GlobalMedicine = GlobalMedicine = __decorate([
    (0, typeorm_1.Entity)('global_medicines')
], GlobalMedicine);
//# sourceMappingURL=global-medicine.entity.js.map