import { ApiProperty } from "@nestjs/swagger";

export class DeleteUserDto {
    id: number;
    @ApiProperty({example: 'Nome', description: 'Exclui um usuário.'})
    name: string;

    @ApiProperty({example: 'Email' , description: 'Exclui o email do usuário.'})
    email: string;
}