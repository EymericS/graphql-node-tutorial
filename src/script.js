/*
 * Implementation of Prisma
 */
const { PrismaClient } = require('@prisma/client') // Need to be generated

const prisma = new PrismaClient()

// function to send queries to the database by prisma
async function main() {
    const newLink = await prisma.link.create({
        data: {
            description: 'Fullstack tutorial for GraphQL',
            url: 'www.howtographpl.com',
        },
    })
    const allLink = await prisma.link.findMany()

    console.log(allLink)
}

main()
    .catch( e => {
        throw e
    })
    .finally( async () => {
        await prisma.disconnect()
    })