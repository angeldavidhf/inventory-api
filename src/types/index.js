const { gql } = require('apollo-server-express');

const rootTypes = require('./rootTypes');
const companyTypes = require('./companyTypes');
const roleTypes = require('./roleTypes');
const toolTypes = require('./toolTypes');
const userTypes = require('./userTypes');
const visitTypes = require('./visitTypes');

module.exports = gql`
    ${companyTypes}
    ${roleTypes}
    ${toolTypes}
    ${userTypes}
    ${visitTypes}
`;