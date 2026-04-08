import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';
export class LoginDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'Email do usuário',
  })
  @IsEmail({}, { message: 'O email informado não é válido' })
  email: string;
  @ApiProperty({
    example: 'MinhaSenh@123',
    description: 'Senha do usuário',
  })
  @IsString({ message: 'A senha deve ser uma string' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  password: string;
}
