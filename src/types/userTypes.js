const { gql } = require('apollo-server-express');

const userTypes = gql`
    type User {
        id: ID!
        name: String!
        branch_office: String!
        role: Role!
        tools: [Tool]!
        visits: [Visit]!
        createdAt: String!
        updatedAt: String!
    }

    input UserInput {
        name: String!
        branch_office: String!
        roleId: ID!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User
    }

    type Mutation {
        createUser(input: UserInput!): User!
        updateUser(id: ID!, input: UserInput!): User!
        deleteUser(id: ID!): ID!
    }
`;

module.exports = userTypes;