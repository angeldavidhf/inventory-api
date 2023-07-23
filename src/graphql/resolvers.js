const { Tools } = require('../models');
const { Tasks } = require('../models');

const resolvers = {
    Query: {
        tools: async () => {
            return Tools.findAll();
        },
        tool: async (parent, { id }) => {
            return Tools.findByPk(id);
        },
        tasks: async () => {
            return Tasks.findAll();
        },
        task: async (parent, { id }) => {
            return Tasks.findByPk(id);
        },
    },
    Mutation: {
        createTool: async (parent, { name, value, status }) => {
            return Tools.create({ name, value, status });
        },
        updateTool: async (parent, { id, name, value, status }) => {
            const tool = await Tools.findByPk(id);
            if (!tool) {
                throw new Error('Herramienta no encontrada');
            }
            tool.name = name;
            tool.value = value;
            tool.status = status;
            await tool.save();
            return tool;
        },
        deleteTool: async (parent, { id }) => {
            const tool = await Tools.findByPk(id);
            if (!tool) {
                throw new Error('Herramienta no encontrada');
            }
            await tool.destroy();
            return id;
        },
        createTask: async (parent, { description, responsable, status }) => {
            return Tasks.create({ description, responsable, status });
        },
        updateTask: async (parent, { id, description, responsable, status }) => {
            const task = await Tasks.findByPk(id);
            if (!task) {
                throw new Error('Tarea no encontrada');
            }
            task.description = description;
            task.responsable = responsable;
            task.status = status;
            await task.save();
            return task;
        },
        deleteTask: async (parent, { id }) => {
            const task = await Tasks.findByPk(id);
            if (!task) {
                throw new Error('Tarea no encontrada');
            }
            await task.destroy();
            return id;
        },
    },
}

module.exports = resolvers;