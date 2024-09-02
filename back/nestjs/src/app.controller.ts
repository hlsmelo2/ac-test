import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

import { AppService } from '@app/app.service';
import { AuthService } from '@app/modules/auth/auth.service';
import { User } from '@modules/users/users.service';
import { Public } from '@app/modules/auth/guards/public.guard';

@Controller()
export class AppController {
  protected static routes: Array<string> = [
    '/',
  ];

  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {
    //
  }

  @Public()
  @Get(AppController.routes)
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('auth/login')
  async login(@Request() req: { user: User }) {
    return this.authService.login(req.user);
  }

  @Get('profile')
  getProfile(@Request() req: { user: User }) {
    return req.user;
  }
}
