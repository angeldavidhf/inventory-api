const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { resolvers } = require('./graphql/resolvers');
const typeDefs = require('./graphql/schema');

const app = express();

// Middlewares
app.use(express.json());

// GraphQL Schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

module.exports = app;