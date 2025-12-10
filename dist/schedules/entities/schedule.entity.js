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
exports.Schedule = exports.Frequency = void 0;
const typeorm_1 = require("typeorm");
var Frequency;
(function (Frequency) {
    Frequency["DAILY"] = "DAILY";
    Frequency["WEEKLY"] = "WEEKLY";
    Frequency["BIWEEKLY"] = "BIWEEKLY";
    Frequency["MONTHLY"] = "MONTHLY";
    Frequency["CUSTOM"] = "CUSTOM";
})(Frequency || (exports.Frequency = Frequency = {}));
let Schedule = class Schedule {
    id;
    medicineId;
    profileId;
    userId;
    timeOfDay;
    frequency;
    isActive;
    createdAt;
};
exports.Schedule = Schedule;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Schedule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'medicine_id' }),
    __metadata("design:type", String)
], Schedule.prototype, "medicineId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'profile_id' }),
    __metadata("design:type", String)
], Schedule.prototype, "profileId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", String)
], Schedule.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'time_of_day', type: 'time' }),
    __metadata("design:type", String)
], Schedule.prototype, "timeOfDay", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: Frequency,
        default: Frequency.DAILY,
    }),
    __metadata("design:type", String)
], Schedule.prototype, "frequency", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', default: true }),
    __metadata("design:type", Boolean)
], Schedule.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Schedule.prototype, "createdAt", void 0);
exports.Schedule = Schedule = __decorate([
    (0, typeorm_1.Entity)('schedules')
], Schedule);
//# sourceMappingURL=schedule.entity.js.map