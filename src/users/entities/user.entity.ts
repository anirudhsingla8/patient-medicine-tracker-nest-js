import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Profile } from '../../profiles/entities/profile.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true, nullable: true })
    email: string;

    @Column({ nullable: true })
    password: string;

    @Column({ name: 'password_last_changed', nullable: true })
    passwordLastChanged: Date;

    @Column({ name: 'google_id', nullable: true, unique: true })
    googleId: string;

    @Column({ name: 'reset_password_token', nullable: true })
    resetPasswordToken: string;

    @Column({ name: 'reset_password_expires', nullable: true })
    resetPasswordExpires: Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @Column({ name: 'fcm_token', nullable: true })
    fcmToken: string;

    @Column({ name: 'is_enabled', default: true })
    isEnabled: boolean;

    @OneToMany(() => Profile, (profile) => profile.user)
    profiles: Profile[];

    // Relationships will be added later as other entities are created
}
