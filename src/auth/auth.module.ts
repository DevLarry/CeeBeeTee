import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { StaffModule } from 'src/staff/staff.module';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { StaffService } from 'src/staff/staff.service';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule,
    StaffModule,
    JwtModule.register({
      global: true,
      secret: 'WeAllHaveSecrets',
      signOptions: { expiresIn: '12h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, StaffService, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
