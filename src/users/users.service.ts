import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as Knex from 'knex';
import knexConfig from '../../src/config/knex.config'; // Importe a configuração do Knex

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {

  private knex: Knex<any, unknown>;

  constructor() {
    this.knex = Knex(knexConfig); // Inicialize o Knex com a configuração
  }

  private users: User[] = [
    { id: 1, name: 'João', email: 'joao@email.com', password: '123456' },
    { id: 2, name: 'Maria', email: 'maria@email.com', password: '4321' },
  ];

  async findOne(id: number): Promise<any> {
    return await this.knex('users').where({ id }).first(); // Exemplo de consulta ao banco de dados
  }

  async findAll(): Promise<any[]> {
    return await this.knex('users'); // Exemplo de consulta para buscar todos os usuários
  }

  // create(createUserDto: CreateUserDto): User {
  //   const newUser: User = {
  //     id: this.users.length + 1,
  //     name: createUserDto.name,
  //     email: createUserDto.email,
  //     password: createUserDto.password
  //   };

  //   this.users.push(newUser);
  //   return newUser;
  // }

  // findAll() {
  //   return this.users;
  // }

  // findOne(id : number) {
  //   const user = this.users.find(u => u.id == id);

  //   console.log(user);

  //   if (!user) {
  //     throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
  //   }

  //   return user;
  // }

  // update(id: number, updateUserDto: UpdateUserDto):User {
  //   const user = this.users.find(u => u.id === id);

  //   if(!user){
  //     throw new NotFoundException(`Usuário com ID ${id} não encontrado`)
  //   }

  //   Object.assign(user, updateUserDto);
    
  //   return user;
  // }

  // remove(id: number) {
  //   const index = this.users.findIndex(u => u.id === id);

  //   if(index === -1){
  //     throw new NotFoundException(`Usuário com o Id ${id} não existe.`);
  //   }

  //   const deleteUser = this.users.splice(index, 1);
  //   return {
  //     message: `Usuário com o ID ${id} removido com sucesso!`,
  //     user: deleteUser[0]
  //   }
  // }
}
