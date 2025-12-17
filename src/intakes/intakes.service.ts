import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { MedicineIntake } from './entities/intake.entity';
import { CreateIntakeDto, GetIntakesFilterDto } from './dto/intake.dto';

@Injectable()
export class IntakesService {
    constructor(
        @InjectRepository(MedicineIntake)
        private intakesRepository: Repository<MedicineIntake>,
    ) { }

    async create(createIntakeDto: CreateIntakeDto): Promise<MedicineIntake> {
        const intake = this.intakesRepository.create(createIntakeDto);
        return await this.intakesRepository.save(intake);
    }

    async findAll(filterDto: GetIntakesFilterDto): Promise<MedicineIntake[]> {
        const { profileId, medicineId, startDate, endDate } = filterDto;
        const query = this.intakesRepository.createQueryBuilder('intake');

        query.where('intake.profileId = :profileId', { profileId });

        if (medicineId) {
            query.andWhere('intake.medicineId = :medicineId', { medicineId });
        }

        if (startDate && endDate) {
            query.andWhere('intake.takenAt BETWEEN :startDate AND :endDate', {
                startDate,
                endDate,
            });
        }

        query.orderBy('intake.takenAt', 'DESC');
        return await query.getMany();
    }
}
