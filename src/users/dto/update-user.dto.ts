import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
    id: number;
    @ApiProperty({ example: 'Name', description: 'Nome do usuário'})
    name: string;

    @ApiProperty({ example:'Email', description: 'Email do usuário'})
    email: string;
  }
  