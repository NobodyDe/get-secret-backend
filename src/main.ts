import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove campos que NÃO estão no DTO
      forbidNonWhitelisted: true, // Retorna ERRO se enviar campo desconhecido
      transform: true, // Converte tipos automaticamente (ex: "1" → 1)
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
