import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalMedicinesService } from './global-medicines.service';
import { GlobalMedicinesController } from './global-medicines.controller';
import { GlobalMedicine } from './entities/global-medicine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GlobalMedicine])],
  controllers: [GlobalMedicinesController],
  providers: [GlobalMedicinesService],
  exports: [GlobalMedicinesService],
})
export class GlobalMedicinesModule { }
