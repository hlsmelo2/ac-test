import { Body, Controller, Get, Post, Param, Query } from '@nestjs/common';

import { Public } from '@modules/auth/guards/public.guard';
import { Deposit, Transfer, User } from '@modules/types';
import { TransfersService } from '@modules/transfers/transfers.service';
import { UsersService } from '@modules/users/users.service';
import { AuthService } from '@modules/auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private usersService: UsersService,
    private transfersService: TransfersService,
    private authService: AuthService,
  ) {
    //
  }

  @Public()
  @Get('')
  async home(@Body() body: User) {
    return `teste ${JSON.stringify(body)}`;
  }

  @Public()
  @Post('users')
  async createUser(@Body() user: User) {
    return this.usersService.upinsert(user);
  }

  @Public()
  @Post('auth/login')
  async login(@Body() user: User) {
    return this.authService.login(user);
  }

  @Get('profile')
  getProfile(@Body() user: User) {
    return this.usersService.findOne(user.username);
  }

  @Post('transfers')
  sendTransfer(@Body() transfer: Transfer) {
    return this.transfersService.upinsert(transfer);
  }

  @Post('deposits')
  makeDeposit(@Body() deposit: Deposit) {
    return this.transfersService.makeDeposit(deposit);
  }

  @Public()
  @Get('transfers')
  listTranfers(@Query() { id }: { id: string }) {
    return this.transfersService.findAll(parseInt(id));
  }

  @Get('transfers/:id/return')
  returnTransfer(@Param() { id }: { id: string }) {
    return this.transfersService.giveReturn(parseInt(id));
  }
}
