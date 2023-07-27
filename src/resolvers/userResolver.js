const UsersController = require('../controllers/UsersController');

const userResolvers = {
    Query: {
        users: async () => {
            try {
                const users = await UsersController.getUsers()
                return users;
            } catch (error) {
                throw new Error('Error fetching users: ' + error.message);
            }
            return UsersController.getUsers();
        },
        user: async (parent, { id }) => {
            try {
                const user = await UsersController.getUserById(id)
                return user;
            } catch (error) {
                throw new Error('Error fetching user: ' + error.message);
            }
        },
    },
    Mutation: {
        createUser: async (parent, { input }) => {
            try {
                const user = await UsersController.createUser(input);
                return user;
            } catch (error) {
                throw new Error('Error creating user: ' + error.message);
            }
        },
        updateUser: async (parent, { id, input }) => {
            try {
                const user = await UsersController.getUserById(id);
                if (!user) {
                    throw new Error('User not found');
                }
                await UsersController.updateUser(id, input);
                return user;
            } catch (error) {
                throw new Error('Error updating user: ' + error.message);
            }
        },
        deleteUser: async (parent, { id }) => {
            try {
                const user = await UsersController.getUserById(id);
                if (!user) {
                    throw new Error('User not found');
                }
                await UsersController.deleteUser(id);
                return true;
            } catch (error) {
                throw new Error('Error deleting user: ' + error.message);
            }
        },
    },
};

module.exports = userResolvers;