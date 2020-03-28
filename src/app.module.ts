import { Module } from '@nestjs/common';

import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose'
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/api', { useNewUrlParser: true, useUnifiedTopology: true }),
    TasksModule,
    UsersModule],

})
export class AppModule { }
