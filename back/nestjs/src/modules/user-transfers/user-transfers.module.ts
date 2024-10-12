import { Module } from '@nestjs/common';

import { UserTransfersService } from '@modules/user-transfers/user-transfers.service';
import { UserTransfersController } from '@modules/user-transfers/user-transfers.controller';

@Module({
  imports: [],
  controllers: [UserTransfersController],
  providers: [UserTransfersService],
  exports: [UserTransfersService],
})
export class UsersModule {}


