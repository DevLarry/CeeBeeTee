import {
  Controller,
  Get,
  UseGuards,
  Request,
  Post,
  Body,
} from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}
  @Post('login')
  async Login(@Request() req, @Body() body) {
    // return await this.authService.studentSignIn(user.email, user.password);
    const user = await this.authService.Login(body.email, body.password);
    req.session['userID'] = user.id;
    req.session['user'] = await this.jwtService.sign(user);
    return user;
  }
  @UseGuards(AuthGuard)
  @Get()
  index(@Request() req) {
    return req.user;
  }
}
