import { Module } from '@nestjs/common';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService, HttpExceptionFilter],
  exports: [CatsService],
})
export class CatsModule {}
