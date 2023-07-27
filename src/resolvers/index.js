const companyResolvers = require('./companyResolvers');
const roleResolvers = require('./roleResolvers');
const toolResolvers = require('./toolResolvers');
const userResolver = require('./userResolver');
const visitResolvers = require('./visitResolvers');

const resolvers = {
    Query: {
        ...companyResolvers.Query,
        ...roleResolvers.Query,
        ...toolResolvers.Query,
        ...userResolver.Query,
        ...visitResolvers.Query
    },
    Mutation: {
        ...companyResolvers.Mutation,
        ...roleResolvers.Mutation,
        ...toolResolvers.Mutation,
        ...userResolver.Mutation,
        ...visitResolvers.Mutation
    },
};

module.exports = resolvers;