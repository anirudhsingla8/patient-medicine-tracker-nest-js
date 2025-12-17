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
exports.MedicineIntake = exports.IntakeStatus = void 0;
const typeorm_1 = require("typeorm");
const medicine_entity_1 = require("../../medicines/entities/medicine.entity");
const profile_entity_1 = require("../../profiles/entities/profile.entity");
const schedule_entity_1 = require("../../schedules/entities/schedule.entity");
var IntakeStatus;
(function (IntakeStatus) {
    IntakeStatus["TAKEN"] = "TAKEN";
    IntakeStatus["SKIPPED"] = "SKIPPED";
    IntakeStatus["MISSED"] = "MISSED";
})(IntakeStatus || (exports.IntakeStatus = IntakeStatus = {}));
let MedicineIntake = class MedicineIntake {
    id;
    medicineId;
    medicine;
    profileId;
    profile;
    scheduleId;
    schedule;
    status;
    takenAt;
    notes;
    createdAt;
};
exports.MedicineIntake = MedicineIntake;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MedicineIntake.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'medicine_id' }),
    __metadata("design:type", String)
], MedicineIntake.prototype, "medicineId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medicine_entity_1.Medicine),
    (0, typeorm_1.JoinColumn)({ name: 'medicine_id' }),
    __metadata("design:type", medicine_entity_1.Medicine)
], MedicineIntake.prototype, "medicine", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'profile_id' }),
    __metadata("design:type", String)
], MedicineIntake.prototype, "profileId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profile_entity_1.Profile),
    (0, typeorm_1.JoinColumn)({ name: 'profile_id' }),
    __metadata("design:type", profile_entity_1.Profile)
], MedicineIntake.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'schedule_id', nullable: true }),
    __metadata("design:type", String)
], MedicineIntake.prototype, "scheduleId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => schedule_entity_1.Schedule, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'schedule_id' }),
    __metadata("design:type", schedule_entity_1.Schedule)
], MedicineIntake.prototype, "schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: IntakeStatus,
        default: IntakeStatus.TAKEN,
    }),
    __metadata("design:type", String)
], MedicineIntake.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'taken_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], MedicineIntake.prototype, "takenAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], MedicineIntake.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], MedicineIntake.prototype, "createdAt", void 0);
exports.MedicineIntake = MedicineIntake = __decorate([
    (0, typeorm_1.Entity)('medicine_intakes')
], MedicineIntake);
//# sourceMappingURL=intake.entity.js.map