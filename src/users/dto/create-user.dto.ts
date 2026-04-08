import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'Email do usuário',
  })
  @IsEmail({}, { message: 'o email informado não é valido' })
  email: string;
  @ApiPropertyOptional({
    // Swagger: marca como opcional
    example: 'john_doe',
    description: 'Nome de usuário',
  })
  @IsOptional() // class-validator: campo pode ser undefined
  @IsString({ message: 'O username deve ser uma string' })
  username?: string; // O "?" no TypeScript também marca como opcional
  @ApiProperty({
    example: 'MinhaSenh@123',
    description: 'Senha do usuário (mínimo 6 caracteres)',
    minLength: 6,
  })
  @IsString({ message: 'A senha deve ser uma string' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  password: string;
}
