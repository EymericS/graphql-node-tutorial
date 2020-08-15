const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')

/*
 * Prisma implementation
 */
const { PrismaClient } = require('@prisma/client') // Need to be generated
const prisma = new PrismaClient()

/*
 * Implementation of the GraphQL schema
 */
const resolvers = {
    Query,
    Mutation,
    User,
    Link,
}

/*
 * Tells the server what API operations are accepted and how they should be resolved.
 */
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql', // Defines GraphQL schema
    resolvers,
    context: request => {
        return {
            ...request, // attach the HTTP request to allow resolvers to read the Authorization header to perform the requested operation.
            prisma, // save an instance of PrismaClien in context
        }
    }
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
