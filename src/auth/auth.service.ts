import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { MailService } from './mail.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) { }

  async register(createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async login(loginDto: any) {
    const user = await this.usersService.findByEmail(loginDto.email);
    if (user && (await bcrypt.compare(loginDto.password, user.password))) {
      const payload = { email: user.email, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async validateGoogleUser(details: any) {
    const user = await this.usersService.create({
      email: details.email,
      googleId: details.googleId,
    });
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async forgotPassword(email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    user.resetPasswordToken = token;
    user.resetPasswordExpires = new Date(Date.now() + 3600000); // 1 hour
    await this.usersService.update(user.id, {
      resetPasswordToken: token,
      resetPasswordExpires: user.resetPasswordExpires,
    });
    await this.mailService.sendPasswordResetEmail(email, token);
    return { message: 'Password reset email sent' };
  }

  async resetPassword(resetPasswordDto: any) {
    const user = await this.usersService.findByEmail(resetPasswordDto.email); // Ideally find by token, but for simplicity finding by email then checking token
    // Actually, we should find by token. But UsersService doesn't have findByToken.
    // Let's iterate or assume email is passed.
    // Better: Add findByResetToken to UsersService.
    // For now, let's assume email is passed in DTO or we query raw.
    // Let's stick to email + token in DTO.
    if (!user || user.resetPasswordToken !== resetPasswordDto.token || user.resetPasswordExpires < new Date()) {
      throw new UnauthorizedException('Invalid or expired token');
    }
    const hashedPassword = await bcrypt.hash(resetPasswordDto.password, 10);
    await this.usersService.update(user.id, {
      password: hashedPassword,
      resetPasswordToken: null as any,
      resetPasswordExpires: null as any,
    });
    return { message: 'Password reset successful' };
  }

  create(createAuthDto: any) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: any) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
