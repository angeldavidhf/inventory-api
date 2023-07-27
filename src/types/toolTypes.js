const { gql } = require('apollo-server-express');

const toolTypes = gql`
    type Tool {
        id: ID!
        userId: ID
        name: String!
        value: Float!
        status: Boolean!
        user: User
        createdAt: String!
        updatedAt: String!
    }

    input ToolInput {
        userId: ID
        name: String!
        value: Float!
        status: Boolean!
    }

    type Query {
        tools: [Tool!]!
        tool(id: ID!): Tool
    }

    type Mutation {
        createTool(input: ToolInput!): Tool!
        updateTool(id: ID!, input: ToolInput!): Tool!
        deleteTool(id: ID!): ID!
    }
`;

module.exports = toolTypes;