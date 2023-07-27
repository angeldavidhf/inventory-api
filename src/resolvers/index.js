const companyResolvers = require('./companyResolvers');
const roleResolvers = require('./roleResolvers');
const toolResolvers = require('./toolResolvers');
const userResolvers = require('./userResolvers');
const visitResolvers = require('./visitResolvers');

const resolvers = {
    Query: {
        ...companyResolvers.Query,
        ...roleResolvers.Query,
        ...toolResolvers.Query,
        ...userResolvers.Query,
        ...visitResolvers.Query
    },
    Mutation: {
        ...companyResolvers.Mutation,
        ...roleResolvers.Mutation,
        ...toolResolvers.Mutation,
        ...userResolvers.Mutation,
        ...visitResolvers.Mutation
    },
};

module.exports = resolvers;