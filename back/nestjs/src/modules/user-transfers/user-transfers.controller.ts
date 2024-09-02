import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';

import { UserTransfersService } from './user-transfers.service';
import { DepositTransfer, User } from '../types';

@Controller('user/:id/transfers')
export class UserTransfersController {
  constructor(private readonly userTransfersService: UserTransfersService) {}

  @Get()
  list(@Param() params: any): Array<DepositTransfer> {
    return this.userTransfersService.list();
  }

  // @Post()
  // create(@Body() user: User): number {
  //   if (!user.username || !user.password) {
  //       throw new BadRequestException('não criado');
  //   }

  //   return this.usersService.create(user);
  // }
}
