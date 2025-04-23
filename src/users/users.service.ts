import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {

  private users: User[] = [
    { id: 1, name: 'João', email: 'joao@email.com' },
    { id: 2, name: 'Maria', email: 'maria@email.com' },
  ];

  create(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: this.users.length + 1,
      name: createUserDto.name,
      email: createUserDto.email
    };

    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id : number) {
    const user = this.users.find(u => u.id == id);

    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto):User {
    const user = this.users.find(u => u.id === id);

    if(!user){
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`)
    }

    Object.assign(user, updateUserDto);
    
    return user;
  }

  remove(id: number) {
    const index = this.users.findIndex(u => u.id === id);

    if(index === -1){
      throw new NotFoundException(`Usuário com o Id ${id} não existe.`);
    }

    const deleteUser = this.users.splice(index, 1);
    return {
      message: `Usuário com o ID ${id} removido com sucesso!`,
      user: deleteUser[0]
    }
  }
}
