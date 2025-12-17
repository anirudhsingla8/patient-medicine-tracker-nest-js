import { Repository } from 'typeorm';
import { MedicineIntake } from './entities/intake.entity';
import { CreateIntakeDto, GetIntakesFilterDto } from './dto/intake.dto';
export declare class IntakesService {
    private intakesRepository;
    constructor(intakesRepository: Repository<MedicineIntake>);
    create(createIntakeDto: CreateIntakeDto): Promise<MedicineIntake>;
    findAll(filterDto: GetIntakesFilterDto): Promise<MedicineIntake[]>;
}
