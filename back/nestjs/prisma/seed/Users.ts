import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { User } from '@app/modules/types';

const prisma = new PrismaClient()

async function main() {
    const count = 7;

    const createRecord = function(v: unknown, index: number): User {
        return {
          id: index,
          username: faker.internet.userName(),
          password: faker.internet.password(),
        };
    }

    const users = faker.helpers.multiple(createRecord, { count })
        .map(async user => await prisma.user.upsert({
                where: { id: user.id },
                update: {},
                create: user,
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