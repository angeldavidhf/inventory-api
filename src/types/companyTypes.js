const { gql } = require('apollo-server-express');

const companyTypes = gql`
    type Company {
        id: ID!
        name: String!
        address: String!
        visits: [Visit]!
        createdAt: String!
        updatedAt: String!
    }

    input CreateCompanyInput {
        name: String!
        address: String!
    }

    input UpdateCompanyInput {
        id: ID!
        name: String!
        address: String!
    }

    type Query {
        companies: [Company!]!
        company(id: ID!): Company
    }

    type Mutation {
        createCompany(input: CreateCompanyInput!): Company!
        updateCompany(input: UpdateCompanyInput!): Company!
        deleteCompany(id: ID!): ID!
    }
`;

module.exports = companyTypes;