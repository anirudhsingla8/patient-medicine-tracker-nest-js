import { Repository } from 'typeorm';
import { Schedule } from './entities/schedule.entity';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
export declare class SchedulesService {
    private schedulesRepository;
    constructor(schedulesRepository: Repository<Schedule>);
    create(createScheduleDto: CreateScheduleDto): Promise<Schedule>;
    findAll(): Promise<Schedule[]>;
    findOne(id: string): Promise<Schedule>;
    update(id: string, updateScheduleDto: UpdateScheduleDto): Promise<Schedule>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
