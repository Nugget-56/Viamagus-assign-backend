import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from '../entities/team.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,
  ) {}

  async createTeam(name: string, members: string[]): Promise<Team> {
    const team = this.teamsRepository.create({
      id: new ObjectId(),
      name,
      members,
    });
    return this.teamsRepository.save(team);
  }

  async getTeam(id: string): Promise<Team> {
    return this.teamsRepository.findOne({where: { id: new ObjectId(id)}});
  }
}