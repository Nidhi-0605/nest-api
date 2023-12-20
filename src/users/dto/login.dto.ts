import { ApiProperty } from "@nestjs/swagger";
export class loginUserDto {
    @ApiProperty()
    readonly username: string;
    
    @ApiProperty()
    readonly password: string;
  }