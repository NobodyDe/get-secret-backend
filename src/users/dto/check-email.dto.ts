import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CheckEmailDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'Email para verificar existência',
  })
  @IsEmail({}, { message: 'O email informado não é válido' })
  email: string;
}
