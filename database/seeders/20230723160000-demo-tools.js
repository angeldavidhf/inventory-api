'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('tools', [
            {
                name: 'Martillo',
                value: 8000.00,
                status: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Destornillador',
                value: 5200.00,
                status: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('tools', null, {});
    },
};