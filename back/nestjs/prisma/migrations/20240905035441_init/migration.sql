-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Transfers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sender" INTEGER NOT NULL,
    "receiver" INTEGER NOT NULL,
    "amount" REAL NOT NULL,
    "return" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Deposits" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "receiver" INTEGER NOT NULL,
    "amount" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "UserPermissions" (
    "userId" INTEGER NOT NULL,
    "send" BOOLEAN NOT NULL,
    "receive" BOOLEAN NOT NULL,
    "receiveDeposit" BOOLEAN NOT NULL,
    "requestReturn" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UserPermissions_userId_key" ON "UserPermissions"("userId");
