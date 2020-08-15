# graphql-node-tutorial
The goal of this tutorial is to build an API for a Hacker News clone. [Tutorial link](https://www.howtographql.com/graphql-js/0-introduction/)

## Introduction

- **graphql-yoga:** A fully-featured GraphQL server. It is built on top of Express, apollo-server, graphql-js and more.
- **Prisma:** Replaces traditional ORMs. Use Prisma Client to access your database inside of GraphQL resolvers.
- **GraphQL Playground:** A “GraphQL IDE” that allows you to interactively explore the functionality of a GraphQL API by sending queries and mutations to it.

## Getting Started

- Creating the project
```shell script
  mkdir projectFolder
  cd projectFolder
  npm init -y
```

- Creating a raw GraphQL server
```shell script
  mkdir src
  touch src/index.js
```
```shell script
  npm install graphql-yoga
```
- Testing the GraphQL server
```shell script
  node src/index.js
```
- A word on the GraphQL schema

## A Simple Query

- Extending the schema definition
- Implement resolver functions
- The query resolution process ( [article](https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e#9d03) to learn more about )

## A Simple Mutation

- Extending the schema definition
```shell script
  touch src/schema.graphql
```
- Implementing the resolver function
- Testing the mutation
- Some Exercises

## Adding a Database

- So, what is Prisma?
    - Prisma Client: An auto-generated and type-safe query builder for Node.js & TypeScript.
    - Prisma Migrate (experimental): A declarative data modeling & migration system.
    - Prisma Studio (experimental): A GUI to view and edit data in your database.
- Why Prisma?
- Setting up our project with Prisma and SQLite
```shell script
  npm install @prisma/cli --save-dev
```
```shell script
  mkdir prisma
  touch prisma/schema.prisma
```
- Getting Started with SQLite
```shell script
  npx prisma migrate save --name "migration-name" --experimental --schema=./prisma/prisma.schema
  npx prisma migrate up --experimental --schema=./prisma/prisma.schema
```
- Generating Prisma Client
```shell script
  npx prisma generate --schema=./prisma/prisma.schema
```
* Summary of your workflow
  1. Manually adjust the Prisma data model.
  2. Migrate the database using the `prisma migrate` CLI commands.
  3. (Re-)generate Prisma Client
  4. Use Prisma Client in application code to access database.
  
## Connecting The Server and Database with Prisma Client

- Wiring up your GraphQL schema with Prisma Client
  - The GraphQL `context` resolver argument
- Updating the resolver functions to use Prisma Client
- Testing the new implementation
- Exploring your data in Prisma Studio
```shell script
  npx prisma studio --experimental
```

## Authentication

- Adding a `User` model
- Understanding relation fields
- Updating Prisma Client
- Implementing the resolver functions
```shell script
mkdir src/resolvers
touch src/resolvers/Query.js
touch src/resolvers/Mutation.js
touch src/resolvers/User.js
touch src/resolvers/Link.js
```
```shell script
npm install jsonwebtoken bcryptjs
touch src/utils.js
touch src/APP_SECRET.js
```
- Requiring authentication for the post mutation
- Testing the authentication flow