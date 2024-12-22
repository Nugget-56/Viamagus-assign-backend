import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';
import { TeamMember } from './member.entity';

@Entity()
export class Team {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  members: string[];
}