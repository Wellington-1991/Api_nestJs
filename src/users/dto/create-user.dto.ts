import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  id: number;
  @ApiProperty({ example: 'Nome', description: 'Nome do usuário' })
  name: string;

  @ApiProperty({ example: 'Email', description: 'Email do usuário' })
  email: string;
}
  