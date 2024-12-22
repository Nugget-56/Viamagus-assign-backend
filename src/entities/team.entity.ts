import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

export class Member {
  @Column()
  id: string;

  @Column('array')
  tasks: string[];
}

@Entity()
export class Team {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column('array')
  members: Member[];
}