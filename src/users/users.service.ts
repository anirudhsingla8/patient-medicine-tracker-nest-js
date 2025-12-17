import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async create(createUserDto: Partial<CreateUserDto> & { googleId?: string }): Promise<User> {
    if (!createUserDto.email) {
      throw new ConflictException('Email is required');
    }
    const existingUser = await this.findByEmail(createUserDto.email);
    if (existingUser) {
      if (createUserDto.googleId && !existingUser.googleId) {
        existingUser.googleId = createUserDto.googleId;
        return this.usersRepository.save(existingUser);
      }
      throw new ConflictException('User with this email already exists');
    }

    let hashedPassword: string | null = null;
    if (createUserDto.password) {
      hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    }

    const user = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword as string, // TypeORM handles null for nullable columns
    });
    return this.usersRepository.save(user);
  }

  async findByGoogleId(googleId: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ googleId });
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email });
  }

  async update(id: string, updateUserDto: Partial<User>) {
    await this.usersRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
