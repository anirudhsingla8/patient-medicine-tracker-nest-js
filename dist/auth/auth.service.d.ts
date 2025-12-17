import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { MailService } from './mail.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private mailService;
    constructor(usersService: UsersService, jwtService: JwtService, mailService: MailService);
    register(createUserDto: CreateUserDto): Promise<{
        access_token: string;
    }>;
    login(loginDto: any): Promise<{
        access_token: string;
    }>;
    validateGoogleUser(details: any): Promise<{
        access_token: string;
    }>;
    forgotPassword(email: string): Promise<{
        message: string;
    }>;
    resetPassword(resetPasswordDto: any): Promise<{
        message: string;
    }>;
    create(createAuthDto: any): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: any): string;
    remove(id: number): string;
}
