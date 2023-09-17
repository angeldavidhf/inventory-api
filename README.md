
# Descripción

Dsarrollada con Node.js, Javascript, express, graphql, apollo, sequelize y postgresql para base de datos.
Tiene una arquitectura similar a MVC, se debe tener instalado PostgreSQL y previamente creada la base de datos, el proyecto se ejecuta sobre el puerto `localhost:4000/graphql`

### Estructura

![App Screenshot](https://raw.githubusercontent.com/angeldavidhf/angeldavidhf/main/projects/blob/structure2.jpg)

- **database**: contiene las migrations, seeders y config
    - **migrations**: contiene todo lo relacionado con la estructura de las tablas en la base de datos
    - **seeders**: crea data de prueba para las tablas, se debe ejecutar primero las migraciones
    - config.js: configuración de los ambientes de la base de datos
    - connection.js: Conexión a la base de datos
- **src**: contiene las migrations, seeders y config
    - **controllers**: Logica del proyecto, intermediaron entre los resolvers y los modelos para trabajar con la base de datos
    - **resolvers**: Configuración y declaración de queries GraphQL, query de cada modelo para consultar información y Mutation para crear, editar o eliminar información.
    - **schema**: Interfaces y definición de tipo data que se va a retornar en cada Query
    - **models**: Modelo de cada entidad, sus tipos de datos y atributos
- index.js: Inicialización del proyecto y conexión con base de datos

### Despliegue local

1. Clonar el proyecto
    ```bash
      git clone https://github.com/angeldavidhf/support-company-api.git
    ```

2. Ir al directorio del proyecto
    ```bash
      cd support-company-api
    ```

3. Instalar dependencias
    ```bash
      npm install
    ```

4. Se debe configurar el ambiente que se vaya a usar de la base de datos en `database/config.js` 

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
    o
    ```bash
      npm start
    ```

   :partying_face: :clap: Listo con esto podemos ver nuestra API en [Apollo Sandbox](https://studio.apollographql.com/sandbox) y la URL seria `http://localhost:4000/graphql`

## Queries para probar funcionalidad

### Roles

1. Crear un nuevo rol
    ```graphql
    mutation {
      createRole(input: { name: "Nuevo Rol" }) {
        id
        name
      }
    }
    ```
    
2. Actualizar un rol existente
    ```graphql
    mutation {
      updateRole(id: 1, input: { name: "Nuevo Nombre de Rol" }) {
        id
        name
      }
    }
    ```
    
3. Obtener todos los roles
    ```graphql
    query {
      roles {
        id
        name
        users {
          id
          name
          branch_office
        }
      }
    }
    ```
    
4. Obtener un rol por su ID
   ```graphql
    query {
      role(id: 1) {
        id
        name
        users {
          id
          name
          branch_office
        }
      }
    }
    ```
   
5. Eliminar un rol por su ID
   ```graphql
    mutation {
      deleteRole(id: 1)
    }
    ```

### Usuarios

1. Crear un nuevo usuario
   ```graphql
    mutation {
      createUser(input: { name: "John Doe", branch_office: "Branch 1", roleId: 1 }) {
        id
        name
        branch_office
        role {
          id
          name
        }
      }
    }
    ```
   
2. Actualiar un usuario existente
   ```graphql
    mutation {
      updateUser(id: 1, input: { name: "Updated User", branch_office: "Updated Branch", roleId: 2 }) {
        id
        name
        branch_office
        role {
          id
          name
        }
      }
    }
    ```
   
3. Obtener todos los usuarios (Tambien podras obtener las herramientas y visitas que estan relacionadas con los usuario)
    ```graphql
    query {
      users {
        id
        name
        branch_office
        role {
          id
          name
        }
        tools {
          id
          name
          value
        }
        visits {
          id
          dateVisit
          company {
            id
            name
          }
        }
      }
    }
    ```
    
4. Obtener un usuario por ID (Tambien podras obtener las herramientas y visitas que estan relacionadas con el usuario)
    ```graphql
    query {
      user(id: 1) {
        id
        name
        branch_office
        role {
          id
          name
        }
        tools {
          id
          name
          value
        }
        visits {
          id
          dateVisit
          company {
            id
            name
          }
        }
      }
    }
    ```
    
5. Eliminar un usuario por su ID
   ```graphql
    mutation {
      deleteUser(id: 1)
    }
    ```

### Herramientas

1. Crear una nueva herramienta (el **userId** no es obligatorio):
    ```graphql
    mutation {
      createTool(input: { userId: 1, name: "Hammer", value: 15.99, status: true }) {
        id
        name
        value
        status
        user {
          id
          name
          branch_office
        }
      }
    }
    ```
    
2. Actualizar una herramienta existente:
    ```graphql
    mutation {
      updateTool(id: 1, input: { name: "Updated Tool", value: 20.99, status: false }) {
        id
        name
        value
        status
        user {
          id
          name
          branch_office
        }
      }
    }
    ```
    
3. Consultar todas las herramientas:
    ```graphql
    query {
      tools {
        id
        name
        value
        status
        user {
          id
          name
          branch_office
        }
      }
    }
    ```
    
4. Consultar una herramienta por su ID:
    ```graphql
    query {
      tool(id: 1) {
        id
        name
        value
        status
        user {
          id
          name
          branch_office
        }
      }
    }
    ```
    
5. Eliminar una herramienta por su ID:
    ```graphql
    mutation {
      deleteTool(id: 1)
    }
    ```

### Empresas

1. Crear una nueva empresa:
    ```graphql
    mutation {
      createCompany(input: { name: "ABC Corp", address: "123 Main St" }) {
        id
        name
        address
      }
    }
    ```
    
2. Actualizar una empresa existente:
    ```graphql
    mutation {
      updateCompany(id: 1, input: { name: "Updated Company", address: "456 Park Ave" }) {
        id
        name
        address
      }
    }
    ```
    
3. Consultar todas las empresas:
    ```graphql
    query {
      companies {
        id
        name
        address
        visits {
          id
          dateVisit
          user {
            id
            name
            branch_office
          }
        }
      }
    }
    ```
    
4. Consultar una empresa por su ID:
    ```graphql
    query {
      company(id: 1) {
        id
        name
        address
        visits {
          id
          dateVisit
          user {
            id
            name
            branch_office
          }
        }
      }
    }
    ```
    
5. Eliminar una empresa por su ID:
    ```graphql
    mutation {
      deleteCompany(id: 1)
    }
    ```

### Visitas

1. Crear una nueva visita:
    ```graphql
    mutation {
      createVisit(input: { userId: 1, companyId: 1, dateVisit: "2023-07-31" }) {
        id
        dateVisit
        user {
          id
          name
          branch_office
        }
        company {
          id
          name
        }
      }
    }
    ```
    
2. Actualizar una visita existente:
    ```graphql
    mutation {
      updateVisit(id: 1, input: { dateVisit: "2023-08-15" }) {
        id
        dateVisit
        user {
          id
          name
          branch_office
        }
        company {
          id
          name
        }
      }
    }
    ```
    
3. Consultar todas las visitas:
    ```graphql
    query {
      visits {
        id
        dateVisit
        user {
          id
          name
          branch_office
        }
        company {
          id
          name
        }
      }
    }
    ```
    
4. Consultar una visita por su ID:
    ```graphql
    query {
      visit(id: 1) {
        id
        dateVisit
        user {
          id
          name
          branch_office
        }
        company {
          id
          name
        }
      }
    }
    ```
    
5. Eliminar una visita por su ID:
    ```graphql
    mutation {
      deleteVisit(id: 1)
    }
    ```

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

