import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { IntakesService } from './intakes.service';
import { CreateIntakeDto, GetIntakesFilterDto } from './dto/intake.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('intakes')
@UseGuards(AuthGuard('jwt'))
export class IntakesController {
    constructor(private readonly intakesService: IntakesService) { }

    @Post()
    create(@Body() createIntakeDto: CreateIntakeDto) {
        return this.intakesService.create(createIntakeDto);
    }

    @Get()
    findAll(@Query() filterDto: GetIntakesFilterDto) {
        return this.intakesService.findAll(filterDto);
    }
}
