import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(username, pass) {
    const user = await this.usersService.findOne2(username);
    // console.log("user",user,username)
    if (user?.password !== pass) {
      return {status:201,message:"password not matched"}
    }
    const payload = { sub: user.password, username: user.username };
    
    return {status:200,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}