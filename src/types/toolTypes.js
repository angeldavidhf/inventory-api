const { gql } = require('apollo-server-express');

const toolTypes = gql`
    type Tool {
        id: ID!
        userId: ID!
        name: String!
        value: Float!
        status: Boolean!
        user: User
        createdAt: String!
        updatedAt: String!
    }

    input CreateToolInput {
        userId: ID!
        name: String!
        value: Float!
        status: Boolean!
    }

    input UpdateToolInput {
        id: ID!
        userId: ID!
        name: String!
        value: Float!
        status: Boolean!
    }

    type Query {
        tools: [Tool!]!
        tool(id: ID!): Tool
    }

    type Mutation {
        createTool(input: CreateToolInput!): Tool!
        updateTool(input: UpdateToolInput!): Tool!
        deleteTool(id: ID!): ID!
    }
`;

module.exports = toolTypes;