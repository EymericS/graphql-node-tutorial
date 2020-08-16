const { GraphQLServer } = require('graphql-yoga')
const { PubSub } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client') // Need to be generated

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Subscription = require('./resolvers/Subscription')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Vote = require('./resolvers/Votes')

/*
 * Prisma implementation
 */
const prisma = new PrismaClient()

/*
 * PubSub implementation ( graphql Subscribtion )
 */
const pubsub = new PubSub()

/*
 * Implementation of the GraphQL schema
 */
const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Link,
    Vote,
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
            pubsub,
        }
    },
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
