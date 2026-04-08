import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
@Global() // acesso global para todos modulos
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
