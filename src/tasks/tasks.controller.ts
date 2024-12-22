import { Controller, Get, Post, Put, Patch, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTask, UpdateTask } from './tasks.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('task')
//@UseGuards(AuthGuard('jwt'))
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  createTask(@Body() createTask: CreateTask) {
    return this.tasksService.createTask(createTask);
  }

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get('assignee/:id')
  getTasksByAssignee(@Param('id') assigneeId: string) {
    return this.tasksService.getTasksByAssignee(assigneeId);
  }

  @Patch(':taskId/assign/:assigneeId')
  assignTask(@Param('taskId') taskId: string, @Param('assigneeId') assigneeId: string) {
    return this.tasksService.assignTask(taskId, assigneeId);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTask) {
    return this.tasksService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.removeTask(id);
  }
}