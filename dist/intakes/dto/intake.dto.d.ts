import { IntakeStatus } from '../entities/intake.entity';
export declare class CreateIntakeDto {
    medicineId: string;
    profileId: string;
    scheduleId?: string;
    status: IntakeStatus;
    takenAt: Date;
    notes?: string;
}
export declare class GetIntakesFilterDto {
    profileId: string;
    medicineId?: string;
    startDate?: string;
    endDate?: string;
}
