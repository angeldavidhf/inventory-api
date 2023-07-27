const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('support_company_db', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;