const { GraphQLServer } = require('graphql-yoga')

const { PrismaClient } = require('@prisma/client') // Need to be generated

const prisma = new PrismaClient()

// Dummy data
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}]

let idCount = links.length

/*
 * Implementation of the GraphQL schema
 */
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: async (parent, args, context, info) => {
            return context.prisma.link.findMany()
        },
    },
    Mutation: {
        post: (parent, args, context) => {
            const newLink = context.prisma.link.create({
                data: {
                    description: args.description,
                    url: args.url,
                },
            })

            return newLink
        },
    },
}

/*
 * Tells the server what API operations are accepted and how they should be resolved.
 */
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql', // Defines GraphQL schema
    resolvers,
    context: {
        prisma, // save an instance of PrismaClien in context
    }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
