import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { TeamsService } from './team.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('team')
//@UseGuards(AuthGuard('jwt'))
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Post()
  createTeam(@Body() body: { name: string; memberIds: string[] }) {
    return this.teamsService.createTeam(body.name, body.memberIds);
  }

  @Get(':id')
  getTeam(@Param('id') id: string) {
    return this.teamsService.getTeam(id);
  }
}