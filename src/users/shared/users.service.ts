import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'
import { User } from './users'
@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }
  async teste() {
    return 'boa'
  }

  async create(user: User) {
    const createdTask = new this.userModel(user)

    return await createdTask.save();
  }
}
