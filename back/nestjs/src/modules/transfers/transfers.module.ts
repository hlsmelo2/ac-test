import { Module } from '@nestjs/common';

import { TransfersService } from './transfers.service';
import { TransfersController } from './transfers.controller';

@Module({
  imports: [],
  controllers: [TransfersController],
  providers: [TransfersService],
  exports: [TransfersService],
})
export class TransfersModule {}


