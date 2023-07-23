
# RETO NUB 7/8

Prueba técnica desarrollada con Node.js, Javascript, express, graphql, apollo, sequelize y postgresql para base de datos.
Tiene una arquitectura similar a MVC, se debe tener instalado PostgreSQL y previamente creada la base de datos, el proyecto se ejecuta sobre el puerto `localhost:4000/graphql`

### Estructura

![App Screenshot](https://i.ibb.co/XbqCXzP/structure.jpg)

La estructura de carpetas contiene inicialmente en la carpeta raíz

- **database**: contiene las migrations, seeders y config
    - **migrations**: contiene todo lo relacionado con la estructura de las tablas en la base de datos
    - **seeders**: crea data de prueba para las tablas, se debe ejecutar primero las migraciones
    - config.json: configuración de la base de datos
- **src**: contiene las migrations, seeders y config
    - **controllers**: Lógica de negocio
    - **graphql**: Configuración y declaración de queries para modelos en GraphQL
      - **resolvers**: Query de cada modelo para consultar información y Mutation para crear, editar o eliminar información.
      - **schema**: Interfaces y definición de tipo data que se va a retornar en cada Query
      - server.js: Configuración de Apollo GraphQL
    - **models**: Modelo de cada entidad, sus tipos de datos y atributos
    - **routes**: rutas definidas para API REST
    - app.js: Configuración de API REST y uso de GraphQL
- index.js: Inicialización del proyecto y conexión con base de datos

### Despliegue local

1. Clonar el proyecto
    ```bash
      git clone https://github.com/angeldavidhf/inventory-api.git
    ```

2. Ir al directorio del proyecto
    ```bash
      cd inventory-api
    ```

3. Instalar dependencias
    ```bash
      npm install
    ```

4. Se debe configurar el ambiente que se vaya a usar de la base de datos en `database/config.json` 

5. Correr migración para crear tablas en base de datos
    ```bash
      npm run migrate
    ```
   - **_(Opcional)_** Correr seeders para crear data de pruebas en base de datos
        ```bash
          npm run seed
        ```
6. Iniciar proyecto, esto se va a ejecutar en ambiente _development_
    ```bash
      npm run dev
    ```

   :partying_face: :clap: Listo con esto podemos ver nuestra API en [Apollo Sandbox](https://studio.apollographql.com/sandbox) y la URL seria `localhost:4000/graphql`

## Tecnologías
- sequelize
- express
- express-graphql
- graphql
- graphql-tag
- @graphql-tools/schema
- @graphql-tools/utils
- apollo-server-express
- pg
- pg-hstore

