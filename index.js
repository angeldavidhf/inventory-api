const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const sequelize = require('./database/connection');
const typeDefs = require('./src/types');
const resolvers = require('./src/resolvers');

async function startServer() {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start();

    server.applyMiddleware({ app });

    sequelize
        .sync()
        .then(() => {
            console.log('Base de datos conectada.');
        })
        .catch((err) => {
            console.error('Error al conectar a la base de datos:', err);
        });

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
        console.log(`Servidor iniciado en http://localhost:${PORT}${server.graphqlPath}`);
    });
}

startServer().catch(error => {
    console.error('Error iniciando el servidor:', error);
});