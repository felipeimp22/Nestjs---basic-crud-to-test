import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TasksController } from './tasks/tasks.controller';
// import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';
import {MongooseModule} from '@nestjs/mongoose'
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/api',{useNewUrlParser:true,useUnifiedTopology: true}),
    TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
