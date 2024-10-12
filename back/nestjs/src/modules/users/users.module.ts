import { Module } from '@nestjs/common';

import { UsersService } from '@modules/users/users.service';
import { UsersController } from '@modules/users/users.controller';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}


