const { Sequelize } = require('sequelize');
const dbConfig = require('../../database/config.json');

const sequelize = new Sequelize(
    dbConfig.development.database,
    dbConfig.development.username,
    dbConfig.development.password,
    {
        host: dbConfig.development.host,
        dialect: dbConfig.development.dialect,
    }
)

const ToolModel = require('./toolModel');
const Tools = ToolModel(sequelize);

const TaskModel = require('./taskModel');
const Tasks = TaskModel(sequelize);

module.exports = {
    sequelize,
    Tools,
    Tasks
};