import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { Transfer } from '@app/modules/types';

const prisma = new PrismaClient()

async function main() {
    const count = 30;
    const maxId = 6;

    const createRecord = function(v: unknown, index: number): Transfer {
        return {
          id: index,
          receiver: faker.number.int(maxId),
          sender: faker.number.int(maxId),
          amount: faker.number.float(100),
          return: faker.number.int(1) === 1,
        };
    }

    const users = faker.helpers.multiple(createRecord, { count })
        .map(async transfer => await prisma.transfers.upsert(<any>{
                where: { id: transfer.id },
                update: {},
                create: transfer,
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