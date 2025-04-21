import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo usuário' }) // Descrição do que a rota faz
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso.' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista de usuários.', type: [User] })
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Listar usuário por id'})
  @ApiResponse({status: 200, description: 'Usuário existe.'})
  findOne(@Param('id') id: string): User {
    return this.usersService.findOne(Number(id));
  }

  @Patch(':id')
  @ApiOperation({summary: 'Atulizar usuário.'})
  @ApiResponse({status: 200, description: 'Usuário atualizado com sucesso.!'})
  update(@Param('id') id: string,@Body() updateUserDto: UpdateUserDto):User {
    
    return this.usersService.update(+id, updateUserDto);;
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
