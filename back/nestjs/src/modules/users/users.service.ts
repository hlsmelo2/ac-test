import { Injectable } from '@nestjs/common';
import { users } from '../data';
import { User } from '../types';

@Injectable()
export class UsersService {
  findAll(): Array<User> {
    return users;
  }

  async findOne(username: string): Promise<User | undefined> {
    return users.find(user => user.username === username);
  }

  update(user: User): User {
    const index = users.findIndex(item => item === user);

    return users[index] = user;
  }

  upinsert(user: User): number | User {
    if (user.id !== undefined) {
      return this.update(user);
    }

    return users.push(user);
  }
}
