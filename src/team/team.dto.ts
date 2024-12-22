import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class MemberDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsArray()
  @IsString({ each: true })
  tasks: string[];
}

export class CreateTeam {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsArray()
  members: string[];
}