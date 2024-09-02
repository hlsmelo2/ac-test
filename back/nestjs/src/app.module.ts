import { Module } from '@nestjs/common';

import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { UsersModule } from '@modules/users/users.module';
import { AuthModule } from '@app/modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}


