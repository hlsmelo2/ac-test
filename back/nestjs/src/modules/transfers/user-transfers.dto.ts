import { Deposit, DepositTransfer, Transfer, UserData, UserPermissions } from "@modules/types";
import { userPermissions, users } from "../data";

export class UserTransfersDTO {
    constructor(
        private userData: UserData,
        private id: number = 0,
        private balance: number = 0,
        private sended: Array<Transfer> = [],
        private received: Array<Transfer> = [],
    ) {
        this.id = (<{id: number}>this.userData.user).id;
        this.balance = this.getBalance(userData);
        this.received = this.getTransfers(userData);
        this.sended = this.getTransfers(userData, false);
    }

    private isReceiver(userId: number, transfer: DepositTransfer): boolean {
        return transfer.receiver === userId;
    }

    private getBalance(data: UserData): number {
        const list = data.deposits.concat(data.transfers);

        return list.reduce((prev: DepositTransfer, current: DepositTransfer): DepositTransfer => {
            const receiver = this.isReceiver((<{id: number}>data.user).id, current);
            const returned = (<Transfer>current).return;
            let amount = prev.amount;

            if (returned) {
                amount = prev.amount;
            }

            if (receiver && !returned) {
                amount = prev.amount + current.amount;
            }

            if (!receiver && !returned) {
                amount = prev.amount - current.amount;
            }

            return (<DepositTransfer>{ amount });
        }).amount;
    }

    private getTransfers(data: UserData, received: boolean = true): Transfer[] {
        return data.transfers.filter((transfer: Transfer): boolean => {
            const key: 'receiver' | 'sender' = received ? 'receiver' : 'sender';

            return data.user.id === transfer[key];
        });
    }

    private getUserByID(id: number) {
        return users.find(user => user.id === id);
    }

    private getUserPermissiomByID(id: number) {
        return userPermissions.find(permission => permission.userId === id);
    }

    private can(checks: any[]) {
        checks.forEach((check: any[]) => {
            if (!check[0]) {
                throw check[1];
            }
        });

        return true;
    }

    private canSendMoney(amount: number, receiver: number) {
        const user = this.getUserByID(receiver);
        const myPermissions = this.getUserPermissiomByID(this.id);
        const permissions = this.getUserPermissiomByID(receiver);

        return this.can([
            [user !== undefined, 'O usuário recebedor não existe'],
            [myPermissions?.send, 'Você não possui permissão para fazer transferêcias'],
            [permissions?.receive, 'O usuário recebedor não possui permissão para receber transferêcias'],
            [this.balance >= amount, 'Você não possui saldo suficiente para fazer essa transferêcias'],
        ]);
    }

    public sendMoney(amount: number, receiver: number) {
        if (!this.canSendMoney(amount, receiver)) {
            return;
        }

        this.userData.transfers.push({ amount, sender: this.id, receiver, return: false });

        this.balance = this.getBalance(this.userData);

        return 'A transferencia foi realizada!';
    }

    public deposit(amount: number) {
        this.userData.deposits.push({ amount, receiver: this.id });
        this.balance = this.getBalance(this.userData);
    }

    // requestReturn(transferID) {
    //     saldo + 500
    // }

    // return(transferID) {
    //     saldo + 500
    // }
}


// const user: UserTransfersDTO = new UserTransfersDTO({
//     user: users[1],
//     transfers: (<Transfer[]>TransferClass.getFromUser(2)),
//     deposits: (<Deposit[]>TransferClass.getFromUser(2, true)),
// });