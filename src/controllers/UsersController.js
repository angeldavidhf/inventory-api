const { UsersModel, RolesModel, ToolsModel } = require('../models');

async function createUser(data) {
    try {
        const newUser = await UsersModel.create(data);
        return newUser;
    } catch (error) {
        throw new Error('Error al crear el usuario');
    }
}

async function getUsers() {
    try {
        const users = await UsersModel.findAll({
            include: [
                { model: RolesModel, as: 'roles' },
                { model: ToolsModel, as: 'tools' }
            ]
        });
        return users;
    } catch (error) {
        throw new Error('Error al obtener los usuarios');
    }
}

async function getUserById(id) {
    try {
        const user = await UsersModel.findByPk(id, {
            include: [
                { model: RolesModel, as: 'roles' },
                { model: ToolsModel, as: 'tools' }
            ]
        });
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        return user;
    } catch (error) {
        throw new Error('Error al obtener el usuario por ID');
    }
}

async function updateUser(id, data) {
    try {
        const user = await UsersModel.findByPk(id);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        await user.update(data);
        return user;
    } catch (error) {
        throw new Error('Error al actualizar el usuario');
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
        throw new Error('Error al eliminar el usuario');
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
};