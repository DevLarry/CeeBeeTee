import { Module } from '@nestjs/common';
import { RegisteredService } from './registered.service';
import { RegisteredController } from './registered.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RegisteredController],
  providers: [RegisteredService, PrismaService],
})
export class RegisteredModule {}
