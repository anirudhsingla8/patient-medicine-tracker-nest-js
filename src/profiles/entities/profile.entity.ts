import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('profiles')
export class Profile {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'user_id' })
    userId: string;

    @ManyToOne(() => User, (user) => user.profiles)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ nullable: true })
    name: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
