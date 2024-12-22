import { ObjectIdColumn, Column } from 'typeorm';

export class TeamMember {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  teamId: string | null;

  @Column()
  taskIds: string[];
}