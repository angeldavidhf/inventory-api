const { gql } = require('graphql-tag');

const typeDefs = gql`
    type Task {
        id: ID!
        description: String!
        responsable: String!
        status: String
        createdAt: String!
        updatedAt: String!
    }

    type Tool {
        id: ID!
        name: String!
        value: Float!
        status: Boolean!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        tools: [Tool!]!
        tool(id: ID!): Tool

        tasks: [Task!]!
        task(id: ID!): Task
    }

    type Mutation {
        createTool(name: String!, value: Float!, status: Boolean!): Tool!
        updateTool(id: ID!, name: String!, value: Float!, status: Boolean!): Tool!
        deleteTool(id: ID!): ID!

        createTask(description: String!, responsable: String!, status: String): Task!
        updateTask(id: ID!, description: String!, responsable: String!, status: String): Task!
        deleteTask(id: ID!): ID!
    }
`;

module.exports = typeDefs;