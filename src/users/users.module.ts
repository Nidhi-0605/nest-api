import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schema/user.schema';
import { user1Schema } from './schema/user1.schema';

@Module({
  imports:[
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/userdata"),
    MongooseModule.forFeature([
      { name: 'user', schema: userSchema },
      { name: 'user1', schema: user1Schema }
      ])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
