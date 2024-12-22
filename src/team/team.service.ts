import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Team } from '../entities/team.entity';
import { CreateTeam } from './team.dto';
import { ObjectId } from 'mongodb';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamsRepository: MongoRepository<Team>,
  ) {}

  async createTeam(createTeam: CreateTeam): Promise<Team> {
    const members = createTeam.members.map(memberId => ({
      id: memberId,
      tasks: [],
    }));

    const team = this.teamsRepository.create({
      name: createTeam.name,
      members: members,
    });
    
    return this.teamsRepository.save(team);
  }

  async getTeam(id: string): Promise<Team> {
    const objectId = new ObjectId(id);
    const team = await this.teamsRepository.findOne({where: {_id: objectId}});
    if (!team) {
      throw new NotFoundException(`Team with ID "${id}" not found`);
    }
    return team;
  }
}