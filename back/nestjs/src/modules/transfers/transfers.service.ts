import { Injectable } from '@nestjs/common';

export interface User {
    userId: Number,
    username: string,
    password: string,
};

@Injectable()
export class TransfersService {
    list() {
        return [];
    }

    create() {}
}
