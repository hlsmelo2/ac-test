type User = {
    id: number,
    username: string,
    password: string,
}

type UserPermissions = {
    userId: number,
    send: boolean,
    receive: boolean,
    receiveDeposit: boolean,
    requestReturn: boolean,
}

type Transfer = {
    id: number,
    sender: number,
    receiver: number,
    amount: number,
    return: boolean,
}

type Deposit = {
    id: number,
    receiver: number,
    amount: number,
}

type DepositTransfer = Deposit | Transfer;

type UserData = {
    user: User,
    transfers: Array<Transfer>,
    deposits: Array<Deposit>,
}

export { User, UserPermissions, Transfer, Deposit, DepositTransfer, UserData };
