import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

@Entity()
export class Task {
  @ObjectIdColumn()
  id: ObjectId;

  @Column({ type: 'string' })
  description: string;

  @Column({ type: 'date' })
  dueDate: Date;

  @Column({ type: 'string', nullable: true })
  assigneeId: string | null;

  @Column({ type: 'string', enum: TaskStatus })
  status: string;

  @Column({ type: 'string' })
  teamId: ObjectId | null;
}