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
exports.Medicine = exports.Composition = exports.MedicineStatus = void 0;
const typeorm_1 = require("typeorm");
var MedicineStatus;
(function (MedicineStatus) {
    MedicineStatus["ACTIVE"] = "ACTIVE";
    MedicineStatus["INACTIVE"] = "INACTIVE";
})(MedicineStatus || (exports.MedicineStatus = MedicineStatus = {}));
class Composition {
    name;
    strengthValue;
    strengthUnit;
}
exports.Composition = Composition;
let Medicine = class Medicine {
    id;
    userId;
    profileId;
    name;
    imageUrl;
    dosage;
    quantity;
    expiryDate;
    category;
    notes;
    composition;
    form;
    status;
    createdAt;
    updatedAt;
};
exports.Medicine = Medicine;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Medicine.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", String)
], Medicine.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'profile_id' }),
    __metadata("design:type", String)
], Medicine.prototype, "profileId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medicine.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'image_url', nullable: true }),
    __metadata("design:type", String)
], Medicine.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medicine.prototype, "dosage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Medicine.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'expiry_date', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Medicine.prototype, "expiryDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medicine.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medicine.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Array)
], Medicine.prototype, "composition", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Medicine.prototype, "form", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: MedicineStatus,
        default: MedicineStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], Medicine.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Medicine.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Medicine.prototype, "updatedAt", void 0);
exports.Medicine = Medicine = __decorate([
    (0, typeorm_1.Entity)('medicines')
], Medicine);
//# sourceMappingURL=medicine.entity.js.map