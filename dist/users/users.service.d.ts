import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: Partial<CreateUserDto> & {
        googleId?: string;
    }): Promise<User>;
    findByGoogleId(googleId: string): Promise<User | null>;
    findAll(): string;
    findOne(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    update(id: string, updateUserDto: Partial<User>): Promise<User | null>;
    remove(id: string): string;
}
