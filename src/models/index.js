const CompaniesModel = require('./Companies');
const RolesModel = require('./Roles');
const ToolsModel = require('./Tools');
const UsersModel = require('./Users');
const VisitsModel = require('./Visits');

RolesModel.associate({ UsersModel });
UsersModel.associate({ ToolsModel, VisitsModel });
CompaniesModel.associate({ VisitsModel });

module.exports = { CompaniesModel, RolesModel, ToolsModel, UsersModel, VisitsModel };