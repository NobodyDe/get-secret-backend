import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove campos que NÃO estão no DTO
      forbidNonWhitelisted: true, // Retorna ERRO se enviar campo desconhecido
      transform: true, // Converte tipos automaticamente (ex: "1" → 1)
    }),
  );
  app.enableCors({
    origin: configService.get<string>('CORS_ORIGIN', '*'),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  const swaggerConfig = new DocumentBuilder()
    .setTitle('GetScret BFF')
    .setDescription('Backend for Frontend API for getSecret dashboard')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);
  const port = configService.get<number>('PORT', 3000);
  await app.listen(port);
  logger.log(`Application running on http://localhost:${port}/users`);
  logger.log(`Swagger docs at http://localhost:${port}/api/docs`);
}
bootstrap();
