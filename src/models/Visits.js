const { DataTypes } = require('sequelize');
const sequelize = require('../../database/connection');
const UsersModel = require("./Users");
const CompaniesModel = require("./Companies");

const VisitsModel = sequelize.define('visits', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
    },
    companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'companies',
            key: 'id',
        },
    },
    dateVisit: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('NOW()'),
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('NOW()'),
    },
});

VisitsModel.belongsTo(UsersModel, {
    foreignKey: 'userId',
    as: 'user',
});

VisitsModel.belongsTo(CompaniesModel, {
    foreignKey: 'companyId',
    as: 'company',
});

module.exports = VisitsModel;