import { Injectable } from '@nestjs/common';
import { depositList, transferList } from '../data';
import { Deposit, Transfer } from '../types';

export interface User {
    userId: Number,
    username: string,
    password: string,
};

@Injectable()
export class TransfersService {
    private db: Transfer[] = transferList;

    public findAll(userId: number) {
        return this.db.filter(
            transfer => transfer.receiver === userId || transfer.sender === userId
        );
    }

    private findOne(transferId: number) {
        return this.db.find(transfer => transfer.id === transferId);
    }

    public giveReturn(transferId: number) {
        const transfer = this.findOne(transferId);

        if (transfer === undefined) {
            return false;
        }

        transfer.return = true;

        return this.update(transfer);
    }

    private update(transfer: Transfer) {
        const index = this.db.findIndex(item => item === transfer);

        return this.db[index] = transfer;
    }

    public upinsert(transfer: Transfer) {
        if (transfer.id !== undefined) {
            return this.update(transfer);
        }

        return transferList.push(transfer);
    }

    public makeDeposit(deposit: Deposit) {
        depositList.push(deposit);
    }
}
