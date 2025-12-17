import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Medicine } from '../../medicines/entities/medicine.entity';
import { Profile } from '../../profiles/entities/profile.entity';
import { Schedule } from '../../schedules/entities/schedule.entity';

export enum IntakeStatus {
    TAKEN = 'TAKEN',
    SKIPPED = 'SKIPPED',
    MISSED = 'MISSED',
}

@Entity('medicine_intakes')
export class MedicineIntake {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'medicine_id' })
    medicineId: string;

    @ManyToOne(() => Medicine)
    @JoinColumn({ name: 'medicine_id' })
    medicine: Medicine;

    @Column({ name: 'profile_id' })
    profileId: string;

    @ManyToOne(() => Profile)
    @JoinColumn({ name: 'profile_id' })
    profile: Profile;

    @Column({ name: 'schedule_id', nullable: true })
    scheduleId: string;

    @ManyToOne(() => Schedule, { nullable: true })
    @JoinColumn({ name: 'schedule_id' })
    schedule: Schedule;

    @Column({
        type: 'enum',
        enum: IntakeStatus,
        default: IntakeStatus.TAKEN,
    })
    status: IntakeStatus;

    @Column({ name: 'taken_at', type: 'timestamp' })
    takenAt: Date;

    @Column({ nullable: true })
    notes: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
