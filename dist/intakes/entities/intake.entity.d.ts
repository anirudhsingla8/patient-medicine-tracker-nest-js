import { Medicine } from '../../medicines/entities/medicine.entity';
import { Profile } from '../../profiles/entities/profile.entity';
import { Schedule } from '../../schedules/entities/schedule.entity';
export declare enum IntakeStatus {
    TAKEN = "TAKEN",
    SKIPPED = "SKIPPED",
    MISSED = "MISSED"
}
export declare class MedicineIntake {
    id: string;
    medicineId: string;
    medicine: Medicine;
    profileId: string;
    profile: Profile;
    scheduleId: string;
    schedule: Schedule;
    status: IntakeStatus;
    takenAt: Date;
    notes: string;
    createdAt: Date;
}
