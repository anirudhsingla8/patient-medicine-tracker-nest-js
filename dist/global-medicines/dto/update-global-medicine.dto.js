"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGlobalMedicineDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_global_medicine_dto_1 = require("./create-global-medicine.dto");
class UpdateGlobalMedicineDto extends (0, mapped_types_1.PartialType)(create_global_medicine_dto_1.CreateGlobalMedicineDto) {
}
exports.UpdateGlobalMedicineDto = UpdateGlobalMedicineDto;
//# sourceMappingURL=update-global-medicine.dto.js.map