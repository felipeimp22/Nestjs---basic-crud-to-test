import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';

import { UsersService } from './shared/users.service'
import { User } from './shared/users';

@Controller('users')

export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Post('/teste')
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user)
  }




}

