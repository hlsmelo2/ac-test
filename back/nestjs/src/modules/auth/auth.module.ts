import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from '@modules/auth/auth.service';
import { UsersModule } from '@modules/users/users.module';
import { Constants } from '@modules/auth/constants';
import { LocalStrategy } from '@modules/auth/strategies/local.strategy';
import { JwtStrategy } from '@modules/auth/strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: Constants.jwt.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
