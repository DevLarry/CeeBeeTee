/* eslint-disable prettier/prettier */
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
// import { StaffService } from 'src/staff/staff.service';

@Injectable()
export class StaffGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.session['userID']) {
      throw new UnauthorizedException();
    }
    // try {
    const userId = await this.jwtService.verify(request.session['user']).id;
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    // console.log(user);
    if (!user) {
      throw new UnauthorizedException();
    }
    if (user.role == 'STUDENT') {
      throw new UnauthorizedException("You don't have enough privilege");
    }
    return true;
  }
}
