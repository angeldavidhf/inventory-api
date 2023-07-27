const { DataTypes } = require('sequelize');
const sequelize = require('../../database/connection');

const RolesModel = require('./Roles');

const UsersModel = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'roles',
            key: 'id',
        },
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    branch_office: {
        type: DataTypes.STRING,
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

UsersModel.belongsTo(RolesModel, {
    foreignKey: 'roleId',
    as: 'role',
});

UsersModel.associate = ({ ToolsModel, VisitsModel }) => {
    UsersModel.hasMany(ToolsModel, {
        foreignKey: 'userId',
        as: 'tools',
    });
    UsersModel.hasMany(VisitsModel, {
        foreignKey: 'userId',
        as: 'visits'
    });
};




module.exports = UsersModel;