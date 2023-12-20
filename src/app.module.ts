// app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module'; // Replace 'users' with your resource name
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    UsersModule,
    AuthModule,

       // Serve files from the 'uploads' directory at the '/uploads' endpoint
       ServeStaticModule.forRoot({
        serveRoot: '/uploads',
        rootPath: join(__dirname, '..', 'uploads'), // Adjust the path based on your project structure
      }),
  ],
})
export class AppModule {}
