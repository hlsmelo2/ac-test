import { DepositTransfer, Transfer } from "@modules/types";

export class TransfersDTO {
    public static create(userId: number, deposits: boolean = false): boolean {
        return true;
    }

    public static requestReturn(userId: number, deposits: boolean = false): void {
        //
    }

    public static return(userId: number, deposits: boolean = false): boolean {
        return true;
    }

    public static getAll(deposits: boolean = false): DepositTransfer[] {
        return deposits ? depositList : transferList;
    }

    public static getFromUser(userId: number, deposits: boolean = false): DepositTransfer[] {
        return this.getAll(deposits).filter(
            (transfer: DepositTransfer) => (
                (<Transfer>transfer).receiver === userId ||
                (<Transfer>transfer).sender === userId
            ),
        );
    }
}
