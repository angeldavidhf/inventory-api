const { gql } = require('apollo-server-express');

const userTypes = gql`
    type User {
        id: ID!
        name: String!
        branch_office: String!
        role: Role!
        createdAt: String!
        updatedAt: String!
    }

    input CreateUserInput {
        name: String!
        branch_office: String!
        roleId: ID!
    }

    input UpdateUserInput {
        id: ID!
        name: String!
        branch_office: String!
        roleId: ID!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUser(input: UpdateUserInput!): User!
        deleteUser(id: ID!): ID!
    }
`;

module.exports = userTypes;