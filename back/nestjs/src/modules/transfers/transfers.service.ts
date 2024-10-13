import { Injectable } from '@nestjs/common';
import { Deposit, Transfer } from '../types';
import { PrismaService } from '@app/shared/prisma/prisma.service';

export interface User {
    userId: Number,
    username: string,
    password: string,
};

@Injectable()
export class TransfersService {
    constructor(private prisma: PrismaService) {
        //
    }

    public async findAll(userId: number) {
        userId = parseInt(String(userId));

        return await this.prisma.transfers.findMany({
            where: {
                OR: [
                    { receiver: userId },
                    { sender: userId },
                ],
            },
        });
    }

    private async findOne(transferId: number) {
        return await this.prisma.transfers.findUnique({ where: { id: transferId } });
    }

    public async giveReturn(transferId: number) {
        const transfer = await this.findOne(transferId);

        if (transfer === null) {
            return false;
        }

        transfer.return = true;

        return await this.update(transfer);
    }

    private async update(transfer: Transfer) {
        return await this.prisma.transfers.update({
            where: { id: transfer.id },
            data: transfer,
        });
    }

    public async upinsert(transfer: Transfer) {
        if (transfer.id !== undefined) {
            return await this.update(transfer);
        }

        return await this.prisma.deposits.create({ data: transfer });
    }

    public async makeDeposit(deposit: Deposit) {
        return await this.prisma.deposits.create({ data: deposit });
    }
}
