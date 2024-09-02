import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';

import { DepositTransfer, User } from '../types';
import { TransfersService } from './transfers.service';

@Controller('user/:id/transfers')
export class TransfersController {
  constructor(private readonly transfersService: TransfersService) {}

  @Get()
  list(@Param() params: any): Array<DepositTransfer> {
    return this.transfersService.list();
  }

  @Post()
  create(@Body() user: User): void {
    // if (!user.username || !user.password) {
    //     throw new BadRequestException('não criado');
    // }

    // return this.transfersService.create(user);
  }
}
