const { GraphQLServer } = require('graphql-yoga')

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
        feed: () => links,
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link)
            return link
        }
    },
}

/*
 * Tells the server what API operations are accepted and how they should be resolved.
 */
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql', // Defines GraphQL schema
    resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
