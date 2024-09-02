import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';

import { User, UsersService } from '@modules/users/users.service';

@Controller('users')
export class UsersController {
  protected static routes: Array<string> = [
    '',
    'teste',
    'teste2',
  ];

  constructor(private readonly usersService: UsersService) {}

  @Get(UsersController.routes)
  list(): Array<User> {
    return this.usersService.list();
  }

  @Post()
  create(@Body() user: User): number {
    if (!user.username || !user.password) {
        throw new BadRequestException('não criado');
    }

    return this.usersService.create(user);
  }
}
