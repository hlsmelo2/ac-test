import { Module } from '@nestjs/common';

import { PrismaService } from '@app/shared/prisma/prisma.service';

@Module({
  imports: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
