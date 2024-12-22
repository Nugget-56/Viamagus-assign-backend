import { IsNotEmpty, IsString, IsDate, IsEnum, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export enum TaskStatus {  
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export class CreateTask {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  dueDate: Date;

  @IsNotEmpty()
  @IsString()
  assigneeId: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(TaskStatus)
  status: string;

  @IsNotEmpty()
  @IsString()
  teamId: string;
}

export class UpdateTask {
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dueDate?: Date;

  @IsOptional()
  @IsString()
  assigneeId?: string;

  @IsOptional()
  @IsString()
  @IsEnum(TaskStatus)
  status?: string;
}

export class AssignTask {
  @IsNotEmpty()
  @IsString()
  assigneeId: string;
} 