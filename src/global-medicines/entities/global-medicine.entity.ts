import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('global_medicines')
export class GlobalMedicine {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    name: string;

    @Column({ name: 'brand_name', nullable: true })
    brandName: string;

    @Column({ name: 'generic_name', nullable: true })
    genericName: string;

    @Column({ name: 'dosage_form', nullable: true })
    dosageForm: string;

    @Column({ nullable: true })
    strength: string;

    @Column({ nullable: true })
    manufacturer: string;

    @Column({ nullable: true })
    description: string;

    @Column({ type: 'jsonb', nullable: true })
    indications: string[];

    @Column({ type: 'jsonb', nullable: true })
    contraindications: string[];

    @Column({ name: 'side_effects', type: 'jsonb', nullable: true })
    sideEffects: string[];

    @Column({ type: 'jsonb', nullable: true })
    warnings: string[];

    @Column({ type: 'jsonb', nullable: true })
    interactions: string[];

    @Column({ name: 'storage_instructions', nullable: true })
    storageInstructions: string;

    @Column({ nullable: true })
    category: string;

    @Column({ name: 'atc_code', nullable: true })
    atcCode: string;

    @Column({ name: 'fda_approval_date', type: 'date', nullable: true })
    fdaApprovalDate: Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
