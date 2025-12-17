import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, IsDateString } from 'class-validator';
import { IntakeStatus } from '../entities/intake.entity';

export class CreateIntakeDto {
    @IsUUID()
    @IsNotEmpty()
    medicineId: string;

    @IsUUID()
    @IsNotEmpty()
    profileId: string;

    @IsUUID()
    @IsOptional()
    scheduleId?: string;

    @IsEnum(IntakeStatus)
    @IsNotEmpty()
    status: IntakeStatus;

    @IsDateString()
    @IsNotEmpty()
    takenAt: Date;

    @IsString()
    @IsOptional()
    notes?: string;
}

export class GetIntakesFilterDto {
    @IsUUID()
    @IsNotEmpty()
    profileId: string;

    @IsUUID()
    @IsOptional()
    medicineId?: string;

    @IsDateString()
    @IsOptional()
    startDate?: string;

    @IsDateString()
    @IsOptional()
    endDate?: string;
}
