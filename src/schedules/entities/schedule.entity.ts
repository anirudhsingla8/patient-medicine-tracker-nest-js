import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export enum Frequency {
    DAILY = 'DAILY',
    WEEKLY = 'WEEKLY',
    BIWEEKLY = 'BIWEEKLY',
    MONTHLY = 'MONTHLY',
    CUSTOM = 'CUSTOM',
}

@Entity('schedules')
export class Schedule {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'medicine_id' })
    medicineId: string;

    @Column({ name: 'profile_id' })
    profileId: string;

    @Column({ name: 'user_id' })
    userId: string;

    @Column({ name: 'time_of_day', type: 'time' })
    timeOfDay: string;

    @Column({
        type: 'enum',
        enum: Frequency,
        default: Frequency.DAILY,
    })
    frequency: Frequency;

    @Column({ name: 'is_active', default: true })
    isActive: boolean;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
