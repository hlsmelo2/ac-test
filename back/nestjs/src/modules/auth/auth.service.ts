import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '@modules/users/users.service';
import { User } from '../types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {
    //
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user && user.password === password) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: User): Promise<{ access_token: string }> {
    const validate = await this.validateUser(user.username, user.password);

    if (validate === null) {
      throw new HttpException('User or password is wrong', 401);
    }

    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}