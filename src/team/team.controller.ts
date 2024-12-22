import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { TeamsService } from './team.service';
import { CreateTeam } from './team.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('team')
//@UseGuards(AuthGuard('jwt'))
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  //Create team
  @Post()
  createTeam(@Body() createTeam: CreateTeam) {
    return this.teamsService.createTeam(createTeam);
  }

  //Get team by id
  @Get(':id')
  getTeam(@Param('id') id: string) {
    return this.teamsService.getTeam(id);
  }
}