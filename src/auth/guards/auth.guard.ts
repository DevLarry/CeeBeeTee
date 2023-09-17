import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { PrismaService } from 'src/prisma.service';
// import { StaffService } from 'src/staff/staff.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    // const token = this.extractTokenFromHeader(request);
    if (!request.session['userID']) {
      throw new UnauthorizedException();
    }
    // try {
    const user = await this.jwtService.verify(request.session['user']);
    // console.log(user);
    if (!user) {
      throw new UnauthorizedException();
    }
    request.user = user;
    // } catch {
    //   throw new UnauthorizedException();
    // }
    return true;
  }
}
