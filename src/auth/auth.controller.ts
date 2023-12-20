import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import {loginUserDto} from '../users/dto/login.dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  
  @Post('login')
  signIn(@Body() loginUserDto:loginUserDto ) {
    return this.authService.signIn(loginUserDto.username, loginUserDto.password);
  }
}
