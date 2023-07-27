const { UsersModel, RolesModel, ToolsModel, VisitsModel, CompaniesModel} = require('../models');

async function createUser(data) {
    try {
        const newUser = await UsersModel.create(data);
        return newUser;
    } catch (error) {
        throw new Error(`Error al crear el usuario: ${error}`);
    }
}

async function getUsers() {
    try {
        const users = await UsersModel.findAll({
            include: [
                {
                    model: RolesModel,
                    as: 'role'
                },
                {
                    model: ToolsModel,
                    as: 'tools'
                },
                {
                    model: VisitsModel,
                    as: 'visits',
                    include: [
                        { model: CompaniesModel, as: 'company' }
                    ]
                }
            ]
        });

        users.forEach((user) => {
            user.tools = user.tools || [];
        });

        users.forEach((user) => {
            user.visits = user.visits || [];
        });

        return users;
    } catch (error) {
        throw new Error(`Error al obtener los usuarios: ${error}`);
    }
}

async function getUserById(id) {
    try {
        const user = await UsersModel.findByPk(id, {
            include: [
                {
                    model: RolesModel,
                    as: 'role'
                },
                {
                    model: ToolsModel,
                    as: 'tools'
                },
                {
                    model: VisitsModel,
                    as: 'visits',
                    include: [
                        { model: CompaniesModel, as: 'company' }
                    ]
                }
            ]
        });
        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        user.tools = user.tools || [];
        user.visits = user.visits || [];

        return user;
    } catch (error) {
        throw new Error(`Error al obtener el usuario por ID: ${error}`);
    }
}

async function updateUser(id, data) {
    try {
        const [rowsUpdated, [updatedUser]] = await UsersModel.update(data, {
            where: { id },
            returning: true
        });
        if (rowsUpdated === 0) {
            throw new Error('Usuario no encontrado');
        }
        return updatedUser;
    } catch (error) {
        throw new Error(`Error al actualizar el usuario: ${error}`);
    }
}

async function deleteUser(id) {
    try {
        const user = await UsersModel.findByPk(id);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        await user.destroy();

        //const deleted = await UsersModel.destroy({
        //   where: { id },
        //});

        return id;
    } catch (error) {
        throw new Error(`Error al eliminar el usuario: ${error}`);
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
};