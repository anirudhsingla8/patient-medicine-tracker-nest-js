import { PartialType } from '@nestjs/mapped-types';
import { CreateGlobalMedicineDto } from './create-global-medicine.dto';

export class UpdateGlobalMedicineDto extends PartialType(CreateGlobalMedicineDto) {}
