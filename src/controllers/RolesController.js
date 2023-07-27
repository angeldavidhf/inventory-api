const { RolesModel, UsersModel } = require('../models');

async function createRole(data) {
    try {
        const newRole = await RolesModel.create(data);
        return newRole;
    } catch (error) {
        throw new Error(`Error al crear el rol: ${error}`);
    }
}

async function getRoles() {
    try {
        const roles = await RolesModel.findAll({
            include: {
                model: UsersModel,
                as: 'users'
            }
        });
        return roles;
    } catch (error) {
        throw new Error(`Error al obtener los roles: ${error}`);
    }
}

async function getRoleById(id) {
    try {
        const role = await RolesModel.findByPk(id, {
            include: {
                model: UsersModel,
                as: 'users'
            }
        });
        if (!role) {
            throw new Error('Rol no encontrado');
        }
        return role;
    } catch (error) {
        throw new Error(`Error al obtener el rol por ID: ${error}`);
    }
}

async function updateRole(id, data) {
    try {
        const role = await RolesModel.findByPk(id);
        if (!role) {
            throw new Error('Rol no encontrado');
        }
        await role.update(data);
        return role;
    } catch (error) {
        throw new Error(`Error al actualizar el rol: ${error}`);
    }
}

async function deleteRole(id) {
    try {
        const role = await RolesModel.findByPk(id);
        if (!role) {
            throw new Error('Rol no encontrado');
        }
        await role.destroy();

        //const deleted = await RolesModel.destroy({
        //   where: { id },
        //});

        return id;
    } catch (error) {
        throw new Error(`Error al eliminar el rol: ${error}`);
    }
}

module.exports = {
    createRole,
    getRoles,
    getRoleById,
    updateRole,
    deleteRole,
};