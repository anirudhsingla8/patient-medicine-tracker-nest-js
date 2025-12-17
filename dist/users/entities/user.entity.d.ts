import { Profile } from '../../profiles/entities/profile.entity';
export declare class User {
    id: string;
    email: string;
    password: string;
    passwordLastChanged: Date;
    googleId: string;
    resetPasswordToken: string;
    resetPasswordExpires: Date;
    createdAt: Date;
    fcmToken: string;
    isEnabled: boolean;
    profiles: Profile[];
}
