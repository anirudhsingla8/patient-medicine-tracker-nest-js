import { IntakesService } from './intakes.service';
import { CreateIntakeDto, GetIntakesFilterDto } from './dto/intake.dto';
export declare class IntakesController {
    private readonly intakesService;
    constructor(intakesService: IntakesService);
    create(createIntakeDto: CreateIntakeDto): Promise<import("./entities/intake.entity").MedicineIntake>;
    findAll(filterDto: GetIntakesFilterDto): Promise<import("./entities/intake.entity").MedicineIntake[]>;
}
