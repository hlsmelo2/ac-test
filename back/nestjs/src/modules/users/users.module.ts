import { Module } from '@nestjs/common';

import { UsersService } from '@modules/users/users.service';
import { UsersController } from '@modules/users/users.controller';
import { PrismaModule } from '@app/shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}


