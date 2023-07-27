const { gql } = require('apollo-server-express');

const roleTypes = gql`
    type Role {
        id: ID!
        name: String!
        users: [User]!
        createdAt: String!
        updatedAt: String!
    }

    input RoleInput {
        name: String!
    }

    type Query {
        roles: [Role!]!
        role(id: ID!): Role
    }

    type Mutation {
        createRole(input: RoleInput!): Role!
        updateRole(id: ID!, input: RoleInput!): Role!
        deleteRole(id: ID!): ID!
    }
`;

module.exports = roleTypes;