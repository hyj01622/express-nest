import { CatsService } from './cats.service';
import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}

  @Get()
  getAllCat() {
    return 'all cat';
  }

  @Get(':id')
  getOneCat(@Param('id', PositiveIntPipe) param: number) {
    return 'one cat';
  }

  @Post()
  postCat() {
    return 'create cat';
  }

  @Put(':id')
  putCat() {
    return 'put cat';
  }

  @Patch(':id')
  patchCat() {
    return 'patch cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
