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
exports.IntakesController = void 0;
const common_1 = require("@nestjs/common");
const intakes_service_1 = require("./intakes.service");
const intake_dto_1 = require("./dto/intake.dto");
const passport_1 = require("@nestjs/passport");
let IntakesController = class IntakesController {
    intakesService;
    constructor(intakesService) {
        this.intakesService = intakesService;
    }
    create(createIntakeDto) {
        return this.intakesService.create(createIntakeDto);
    }
    findAll(filterDto) {
        return this.intakesService.findAll(filterDto);
    }
};
exports.IntakesController = IntakesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [intake_dto_1.CreateIntakeDto]),
    __metadata("design:returntype", void 0)
], IntakesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [intake_dto_1.GetIntakesFilterDto]),
    __metadata("design:returntype", void 0)
], IntakesController.prototype, "findAll", null);
exports.IntakesController = IntakesController = __decorate([
    (0, common_1.Controller)('intakes'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [intakes_service_1.IntakesService])
], IntakesController);
//# sourceMappingURL=intakes.controller.js.map