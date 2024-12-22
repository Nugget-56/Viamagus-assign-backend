import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/tasks.entity';
import { CreateTask, UpdateTask } from './tasks.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async createTask(createTaskDto: CreateTask): Promise<Task> {
    const task = this.tasksRepository.create({
      ...createTaskDto,
      assigneeId: new ObjectId(createTaskDto.assigneeId),
    });
    return this.tasksRepository.save(task);
  }

  async getAllTasks(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async getTasksByAssignee(assigneeId: string): Promise<Task[]> {
    return this.tasksRepository.find({ 
      where: { assigneeId: new ObjectId(assigneeId) }, 
    });
  }

  async assignTask(taskId: string, assigneeId: string): Promise<Task> {
    const objectTaskId = new ObjectId(taskId);
    await this.tasksRepository.update(objectTaskId, {
      assigneeId: new ObjectId(assigneeId),
    });
    return this.tasksRepository.findOne({ where: { id: objectTaskId } });
  }

  async updateTask(id: string, updateTask: UpdateTask): Promise<Task> {
    const objectId = new ObjectId(id);
    await this.tasksRepository.update(objectId, updateTask);
    return this.tasksRepository.findOne({where: { id: objectId }});
  }

  async removeTask(id: string): Promise<void> {
    await this.tasksRepository.delete(new ObjectId(id));
  }
}