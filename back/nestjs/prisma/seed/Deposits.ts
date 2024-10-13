import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { Deposit } from '@app/modules/types';

const prisma = new PrismaClient()

async function main() {
    const count = 20;
    const maxId = 6;

    const createRecord = function(v: unknown, index: number): Deposit {
        return {
          id: index,
          receiver: faker.number.int(maxId),
          amount: faker.number.float(100),
        };
    }

    const users = faker.helpers.multiple(createRecord, { count })
        .map(async deposit => await prisma.deposits.upsert(<any>{
                where: { id: deposit.id },
                update: {},
                create: deposit,
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