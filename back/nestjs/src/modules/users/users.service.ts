import { Injectable } from '@nestjs/common';

export interface User {
    userId: Number,
    username: string,
    password: string,
};

@Injectable()
export class UsersService {
  protected readonly users: Array<User> = [
      { userId: 1, username: 'user-1', password: 'password-1' },
      { userId: 2, username: 'user-2', password: 'password-2' },
      { userId: 3, username: 'user-3', password: 'password-3' },
      { userId: 4, username: 'user-4', password: 'password-4' },
  ];

  list(): Array<User> {
    return this.users;
  }

  create(user: User): number {
    return this.users.push(user);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
