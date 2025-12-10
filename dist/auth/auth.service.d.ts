import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(createUserDto: CreateUserDto): Promise<{
        access_token: string;
    }>;
    login(loginDto: any): Promise<{
        access_token: string;
    }>;
    create(createAuthDto: any): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: any): string;
    remove(id: number): string;
}
