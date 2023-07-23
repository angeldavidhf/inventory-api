'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('tasks', [
            {
                description: 'Tarea 1',
                responsable: 'Usuario 1',
                status: 'Iniciada',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                description: 'Tarea 2',
                responsable: 'Usuario 2',
                status: 'Finalizada',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('tasks', null, {});
    }
};