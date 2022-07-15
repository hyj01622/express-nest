import { CatRequestDto } from './dto/cats.request.dto';
import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CatsService } from './cats.service';
import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFiles,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReadOnlyCatDto } from './dto/cat.dto';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(
    private readonly CatsService: CatsService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '고양이 가져오기' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentCat(@CurrentUser() cat) {
    return cat.readOnlyData;
  }

  @ApiResponse({ status: 500, description: 'Server Error...' })
  @ApiResponse({ status: 200, description: '성공!', type: ReadOnlyCatDto })
  @ApiOperation({ summary: '회원가입' })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    return await this.CatsService.signUp(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogIn(data);
  }

  @ApiOperation({ summary: '고양이 업로드' })
  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  uploadCatImg(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    return 'uploadImg';
  }
}
