const { gql } = require('graphql-tag');

const typeDefs = gql`
    type Tools {
        id: ID!
        name: String!
        value: Float!
        status: Boolean!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        tools: [Tools!]!
        tool(id: ID!): Tools
    }

    type Mutation {
        createTool(name: String!, value: Float!, status: Boolean!): Tools!
        updateTool(id: ID!, name: String!, value: Float!, status: Boolean!): Tools!
        deleteTool(id: ID!): ID!
    }
`;

module.exports = typeDefs;