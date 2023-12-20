// users/users.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards,UploadedFile, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interface/user.interface';
import { CreateUser1Dto } from './dto/user1.dto';
import { CreateUserDto } from './dto/user.dto';
import {AuthGuard} from '../auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from './multer.config';
import { ApiResponse, ApiConsumes, ApiBody } from "@nestjs/swagger";


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

// for sign up collection
@ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard)
  @Post('/signup')
  async create(@Body() user: CreateUserDto ){
    return this.usersService.create(user);
  }
 
// for sign up collection
@ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard)
  @Get('/signup/getdata')
  async findAll() {
    return this.usersService.findAll();
  }
  
// for sign up collection
@ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard)
  @Get('signup/getdata/:id')
  async getUserById(@Param('id') id: string){
    return this.usersService.findOne(id);
  }

// for sign up collection
@ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard)
  @Put('signup/getdata/:id')
  async updateUser(@Param('id') id: string, @Body() data: CreateUserDto) {
    return this.usersService.update(id, data);
  }

// for sign up collection
@ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard)
  @Delete('signup/getdata/:id')
  async deleteUser(@Param('id') id: string) {
    
    return this.usersService.delete(id);
  }
 
// update and delete by email start
  // for sign up collection
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard)
@Get('signup/getdata1/:email')
async getUserByEmail(@Param('email') email: string){
  return this.usersService.findOne3(email);
}

// for sign up collection
@ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard)
@Put('signup/getdata1/:email')
async updateUserData(@Param('email') email: string, @Body() data: CreateUserDto) {
  return this.usersService.updateByEmail(email, data);
}

// for sign up collection
@ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard)
@Delete('signup/getdata1/:email')
async deleteUserData(@Param('email') email: string) {
  
  return this.usersService.deleteByEmail(email);
}

// update and delete by email end

 // for login collection

 @Post('/login')
 async create1(@Body() user: CreateUser1Dto ){
   return this.usersService.create1(user);
 }

 // for login collection
 
 @Get('/login/getalldata')
 async findAll1(){
   return this.usersService.findAll1();
 }


// for login collection

@Get('/login/getalldata/:id')
async getUserById1(@Param('id') id: string){
  return this.usersService.findOne1(id);
}


// for login collection

@Put('/login/getalldata/:id')
async updateUser1(@Param('id') id: string, @Body() data: CreateUser1Dto) {
  return this.usersService.update1(id, data);
}


// for login collection

@Delete('/login/getalldata/:id')
async deleteUser1(@Param('id') id: string) {
  return this.usersService.delete1(id);
}


// upload the file in swagger and use file-serve
@ApiBody({
  required: true,
  type: "multipart/form-data",
  schema: {
    type: "object",
    properties: {
      file: {
        type: "string",
        format: "binary",
      },
    },
  },
})
@ApiConsumes("multipart/form-data")

@Post('upload')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async uploadFile(@UploadedFile() file) {

   console.log(file)
    // Handle the uploaded file (save it to a database, process it, etc.)
    return { message: 'File uploaded successfully!' };
}





}
