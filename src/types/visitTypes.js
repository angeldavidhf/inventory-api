const { gql } = require('apollo-server-express');

const visitTypes = gql`
    type Visit {
        id: ID!
        userId: ID!
        companyId: ID!
        dateVisit: String!
        company: Company
        user: User
        createdAt: String!
        updatedAt: String!
    }

    input VisitInput {
        userId: ID!
        companyId: ID!
        dateVisit: String!
    }

    type Query {
        visits: [Visit!]!
        visit(id: ID!): Visit
    }

    type Mutation {
        createVisit(input: VisitInput!): Visit!
        updateVisit(id: ID!, input: VisitInput!): Visit!
        deleteVisit(id: ID!): ID!
    }
`;

module.exports = visitTypes;