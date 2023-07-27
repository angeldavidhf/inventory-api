const { gql } = require('apollo-server-express');

const roleTypes = gql`
    type Role {
        id: ID!
        name: String!
        users: [User]!
        createdAt: String!
        updatedAt: String!
    }

    input CreateRoleInput {
        name: String!
    }

    input UpdateRoleInput {
        id: ID!
        name: String!
    }

    type Query {
        roles: [Role!]!
        role(id: ID!): Role
    }

    type Mutation {
        createRole(input: CreateRoleInput!): Role!
        updateRole(input: UpdateRoleInput!): Role!
        deleteRole(id: ID!): ID!
    }
`;

module.exports = roleTypes;