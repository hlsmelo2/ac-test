import { Injectable } from '@nestjs/common';
import { User } from '../types';
import { PrismaService } from '@app/shared/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {
    //
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(username: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { username } });
  }

  async update(user: User): Promise<User> {
    user.id = parseInt(String(user.id));

    return await this.prisma.user.update({
      data: user,
      where: { id: user.id },
    });
  }

  async upinsert(user: User): Promise<User> {
    if (user.id !== undefined) {
      return await this.update(user);
    }

    return await this.prisma.user.create({
      data: {
        id: (new Date()).getTime(),
        username: user.username,
        password: user.password,
      },
    });
  }
}
