import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Task {
  @ObjectIdColumn()
  id: ObjectId;

  @Column({ type: 'string' })
  description: string;

  @Column({ type: 'date' })
  dueDate: Date;

  @Column({ type: 'string' })
  assigneeId: ObjectId | null;

  @Column({ type: 'string', enum: ['TODO', 'IN_PROGRESS', 'DONE'] })
  status: string;

  @Column({ type: 'string' })
  teamId: ObjectId | null;
}