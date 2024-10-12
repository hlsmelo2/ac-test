// Criar cadastro
// Criar autenticação

import { Deposit, Transfer, User, UserPermissions } from "./types";

const users: Array<User> = [
    { userId: 1, username: 'user-1', passowrd: 'password-1' },
    { userId: 2, username: 'user-2', passowrd: 'password-2' },
    { userId: 3, username: 'user-3', passowrd: 'password-3' },
    { userId: 4, username: 'user-4', passowrd: 'password-4' },
    { userId: 5, username: 'user-5', passowrd: 'password-5' },
    { userId: 6, username: 'user-6', passowrd: 'password-6' },
];

const transferList: Transfer[] = [
    { receiver: users[1].userId, sender: users[0].userId, amount: 10, return: false },
    { receiver: users[1].userId, sender: users[0].userId, amount: 10, return: false },
    { receiver: users[1].userId, sender: users[0].userId, amount: 10, return: true },
    { receiver: users[1].userId, sender: users[0].userId, amount: 10, return: false },
    { receiver: users[0].userId, sender: users[1].userId, amount: 10, return: false },
    { receiver: users[4].userId, sender: users[5].userId, amount: 10, return: false },
    { receiver: users[4].userId, sender: users[5].userId, amount: 10, return: false },
    { receiver: users[5].userId, sender: users[4].userId, amount: 10, return: false },
];

const depositList: Deposit[] = [
    { receiver: users[1].userId, amount: 10 },
    { receiver: users[4].userId, amount: 10 },
    { receiver: users[0].userId, amount: 10 },
    { receiver: users[0].userId, amount: 10 },
    { receiver: users[5].userId, amount: 10 },
];

const userPermissions: UserPermissions[] = [
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
