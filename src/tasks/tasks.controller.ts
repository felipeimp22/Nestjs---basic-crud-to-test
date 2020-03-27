import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import {TasksService} from './shared/tasks.service'
import { Task } from './shared/task';
@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}
    
    @Get()
    getH(): string{
return this.tasksService.getH()
    } 
@Get("/getAll") 
async getAll(): Promise<Task[]>{
    return this.tasksService.getAll()
}

@Post("/create")
async create(@Body() task: Task): Promise <Task>{
    return this.tasksService.create(task)
}

@Put(':id')
async update(@Param('id') id: string, @Body() task: Task): Promise<Task>{
    return this.tasksService.update(id, task)
}

@Delete(':id')
async delete(@Param('id')id: string){
    return this.tasksService.delete(id)
}
}
