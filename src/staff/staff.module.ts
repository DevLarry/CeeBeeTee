import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  exports: [StaffService],
  controllers: [StaffController],
  providers: [StaffService, PrismaService],
})
export class StaffModule {}
