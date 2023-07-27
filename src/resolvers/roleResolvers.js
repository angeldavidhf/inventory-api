const RolesController = require('../controllers/RolesController');

const roleResolvers = {
    Query: {
        roles: async () => {
            try {
                const roles = await RolesController.getRoles()
                return roles;
            } catch (error) {
                throw new Error('Error fetching roles: ' + error.message);
            }
        },
        role: async (parent, { id }) => {
            try {
                const role = await RolesController.getRoleById(id)
                return role;
            } catch (error) {
                throw new Error('Error fetching role: ' + error.message);
            }
        },
    },
    Mutation: {
        createRole: async (parent, { input }) => {
            try {
                const role = await RolesController.createRole(input);
                return role;
            } catch (error) {
                throw new Error('Error creating role: ' + error.message);
            }
        },
        updateRole: async (parent, { id, input }) => {
            try {
                const role = await RolesController.getRoleById(id);
                if (!role) {
                    throw new Error('Role not found');
                }
                await RolesController.updateRole(id, input);
                return role;
            } catch (error) {
                throw new Error('Error updating role: ' + error.message);
            }
        },
        deleteRole: async (parent, { id }) => {
            try {
                const role = await RolesController.getRoleById(id);
                if (!role) {
                    throw new Error('Role not found');
                }
                await RolesController.deleteRole(id);
                return true;
            } catch (error) {
                throw new Error('Error deleting role: ' + error.message);
            }
        },
    },
};

module.exports = roleResolvers;