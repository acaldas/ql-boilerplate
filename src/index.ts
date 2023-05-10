import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs as scalarTypeDefs, resolvers as scalarResolvers } from 'graphql-scalars';
import { typeDefs as budgetTypeDefs, resolvers as budgetResolvers } from './BudgetStatement/schema.js';

const typeDefs = [
    ...scalarTypeDefs,
    budgetTypeDefs
]

const resolvers = [
    scalarResolvers,
    budgetResolvers
]


const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);