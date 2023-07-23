const express = require('express');
const { sequelize } = require('./src/models');
const server = require('./src/graphql/server');

const app = express();

(async () => {
    try {
        // Conectarse a la base de datos antes de iniciar el servidor de Apollo
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida.');

        // Iniciar el servidor de Apollo GraphQL
        await server.start();
        server.applyMiddleware({ app });

        // Iniciar el servidor de Express
        app.listen({ port: 4000 }, () => {
            console.log(`Servidor en http://localhost:4000${server.graphqlPath}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
})();