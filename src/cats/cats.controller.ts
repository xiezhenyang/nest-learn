import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }
}
