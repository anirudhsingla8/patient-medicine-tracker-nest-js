import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfilesService {
    private profilesRepository;
    constructor(profilesRepository: Repository<Profile>);
    create(createProfileDto: CreateProfileDto, userId: string): Promise<Profile>;
    findAll(): Promise<Profile[]>;
    findOne(id: string): Promise<Profile>;
    update(id: string, updateProfileDto: UpdateProfileDto): Promise<Profile>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
