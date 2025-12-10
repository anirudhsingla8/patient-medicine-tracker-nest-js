import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum MedicineStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}

export class Composition {
    name: string;
    strengthValue: string;
    strengthUnit: string;
}

@Entity('medicines')
export class Medicine {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'user_id' })
    userId: string;

    @Column({ name: 'profile_id' })
    profileId: string;

    @Column({ nullable: true })
    name: string;

    @Column({ name: 'image_url', nullable: true })
    imageUrl: string;

    @Column({ nullable: true })
    dosage: string;

    @Column({ nullable: true })
    quantity: number;

    @Column({ name: 'expiry_date', type: 'date', nullable: true })
    expiryDate: Date;

    @Column({ nullable: true })
    category: string;

    @Column({ nullable: true })
    notes: string;

    @Column({ type: 'jsonb', nullable: true })
    composition: Composition[];

    @Column({ nullable: true })
    form: string;

    @Column({
        type: 'enum',
        enum: MedicineStatus,
        default: MedicineStatus.ACTIVE,
    })
    status: MedicineStatus;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
