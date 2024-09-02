type User = {
    userId: number,
    username: string,
    passowrd: string,
}

type UserPermissions = {
    userId: number,
    send: boolean,
    receive: boolean,
    receiveDeposit: boolean,
    requestReturn: boolean,
}

type Transfer = {
    sender: number,
    receiver: number,
    amount: number,
    return: boolean,
}

type Deposit = {
    receiver: number,
    amount: number,
}

type DepositTransfer = (Deposit | Transfer);

type UserData = {
    user: User,
    transfers: Array<Transfer>,
    deposits: Array<Deposit>,
}

export { User, UserPermissions, Transfer, Deposit, DepositTransfer, UserData };
