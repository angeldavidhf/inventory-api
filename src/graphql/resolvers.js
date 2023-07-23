const { Tool } = require('../models');

const resolvers = {
    Query: {
        tools: async () => {
            return Tool.findAll();
        },
        tool: async (parent, { id }) => {
            return Tool.findByPk(id);
        },
    },
    Mutation: {
        createTool: async (parent, { name, value, status }) => {
            return Tool.create({ name, value, status });
        },
        updateTool: async (parent, { id, name, value, status }) => {
            const tool = await Tool.findByPk(id);
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
            const tool = await Tool.findByPk(id);
            if (!tool) {
                throw new Error('Herramienta no encontrada');
            }
            await tool.destroy();
            return id;
        },
    },
}

module.exports = resolvers;