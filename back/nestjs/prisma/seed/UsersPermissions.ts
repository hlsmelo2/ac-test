import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { UserPermissions } from '@app/modules/types';

const prisma = new PrismaClient()

async function main() {
    const count = 7;

    const createRecord = function(v: unknown, index: number): UserPermissions {
        return {
          userId: faker.number.int(count - 1),
          send: faker.number.int(1) === 1,
          receive: faker.number.int(1) === 1,
          receiveDeposit: faker.number.int(1) === 1,
          requestReturn: faker.number.int(1) === 1,
        };
    }

    const users = faker.helpers.multiple(createRecord, { count })
        .map(async userPermissions => await prisma.userPermissions.upsert({
                where: { userId: userPermissions.userId },
                update: {},
                create: userPermissions,
            }),
        );

    console.log(`${users.length} records were created!`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });