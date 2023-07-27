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

    input CompanyInput {
        name: String!
        address: String!
    }

    type Query {
        companies: [Company!]!
        company(id: ID!): Company
    }

    type Mutation {
        createCompany(input: CompanyInput!): Company!
        updateCompany(id: ID!, input: CompanyInput!): Company!
        deleteCompany(id: ID!): ID!
    }
`;

module.exports = companyTypes;