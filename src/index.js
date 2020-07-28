const { GraphQLServer } = require('graphql-yoga')

/*
 * Defines GraphQL schema
 */
const typeDefs = `
type Query {
  info: String!
}
`

/*
 * Implementation of the GraphQL schema
 */
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`
    }
}

/*
 * Tells the server what API operations are accepted and how they should be resolved.
 */
const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
