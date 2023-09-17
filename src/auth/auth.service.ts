import { Injectable, UnauthorizedException } from '@nestjs/common';
// improt { sess } from 'ne'
import { compare } from 'bcrypt';
import { StaffService } from 'src/staff/staff.service';

@Injectable()
export class AuthService {
  constructor(private staffService: StaffService) {}

  async Login(username: string, pass: string): Promise<any> {
    const user = await this.staffService.findOneByEmail(username);
    if (!user) {
      throw new UnauthorizedException('User does not Exixt!');
    }
    const { password, ...rest } = user;
    if (compare(pass, password)) {
      return rest;
    }
    throw new UnauthorizedException('Incorrect password');
  }
}
