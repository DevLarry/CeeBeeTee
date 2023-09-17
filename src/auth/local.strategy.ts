/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
// import { StaffService } from 'src/staff/staff.service';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username, pass): Promise<any> {
    const user = await this.authService.Login(username, pass);
    if (!user) throw new UnauthorizedException("Authentication Failed");
    return user;
  }
}
