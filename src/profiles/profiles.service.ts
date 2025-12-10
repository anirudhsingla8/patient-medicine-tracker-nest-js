import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private profilesRepository: Repository<Profile>,
  ) { }

  create(createProfileDto: CreateProfileDto, userId: string) {
    console.log(userId);
    console.log(createProfileDto);
    Logger.log(userId);
    const profile = this.profilesRepository.create({
      ...createProfileDto,
      userId,
    });
    return this.profilesRepository.save(profile);
  }

  findAll() {
    return this.profilesRepository.find();
  }

  async findOne(id: string) {
    const profile = await this.profilesRepository.findOneBy({ id });
    if (!profile) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
    return profile;
  }

  async update(id: string, updateProfileDto: UpdateProfileDto) {
    const profile = await this.findOne(id);
    Object.assign(profile, updateProfileDto);
    return this.profilesRepository.save(profile);
  }

  async remove(id: string) {
    const result = await this.profilesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
    return { deleted: true };
  }
}
