import { ApiProperty } from "@nestjs/swagger";

export class CreateUser1Dto {
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly mobile: Number;
    @ApiProperty()
    readonly address: string;
  }