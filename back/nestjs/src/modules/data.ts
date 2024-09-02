// Criar cadastro
// Criar autenticação

import { Deposit, Transfer, User, UserPermissions } from "./types";

export const users: Array<User> = [
    { id: 1, username: 'user-1', password: 'pass-1' },
    { id: 2, username: 'user-2', password: 'pass-2' },
    { id: 3, username: 'user-3', password: 'pass-3' },
    { id: 4, username: 'user-4', password: 'pass-4' },
    { id: 5, username: 'user-5', password: 'pass-5' },
    { id: 6, username: 'user-6', password: 'pass-6' },
];

export const transferList: Transfer[] = [
    { receiver: users[1].id, sender: users[0].id, amount: 10, return: false },
    { receiver: users[1].id, sender: users[0].id, amount: 10, return: false },
    { receiver: users[1].id, sender: users[0].id, amount: 10, return: true },
    { receiver: users[1].id, sender: users[0].id, amount: 10, return: false },
    { receiver: users[0].id, sender: users[1].id, amount: 10, return: false },
    { receiver: users[4].id, sender: users[5].id, amount: 10, return: false },
    { receiver: users[4].id, sender: users[5].id, amount: 10, return: false },
    { receiver: users[5].id, sender: users[4].id, amount: 10, return: false },
];

export const depositList: Deposit[] = [
    { receiver: users[1].id, amount: 10 },
    { receiver: users[4].id, amount: 10 },
    { receiver: users[0].id, amount: 10 },
    { receiver: users[0].id, amount: 10 },
    { receiver: users[5].id, amount: 10 },
];

export const userPermissions: UserPermissions[] = [
    { userId: 1, send: true, receive: true, receiveDeposit: true, requestReturn: true },
    { userId: 2, send: true, receive: true, receiveDeposit: true, requestReturn: true },
    { userId: 3, send: true, receive: true, receiveDeposit: true, requestReturn: true },
    { userId: 4, send: true, receive: true, receiveDeposit: true, requestReturn: true },
    { userId: 5, send: true, receive: true, receiveDeposit: true, requestReturn: true },
    { userId: 6, send: true, receive: true, receiveDeposit: true, requestReturn: true },
];

// Validar se o usuário tem saldo antes da transferência
//  e caso o saldo da pessoa esteja negativo por
// algum motivo, no depósito deve acrescentar ao valor.

// A operação de transferência deve ser uma transação passível
// de reversão em qualquer caso de inconsistência
// ou por solicitação do usuário.



// console.log(['TESTE', user]);
// user.sendMoney(10, 4);
// console.log(['TESTE1', user]);
// user.deposit(100);
// console.log(['TESTE2', user]);
