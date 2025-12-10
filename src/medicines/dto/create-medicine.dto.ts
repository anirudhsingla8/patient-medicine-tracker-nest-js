import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateMedicineDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsUUID()
    @IsNotEmpty()
    profileId: string;
}
