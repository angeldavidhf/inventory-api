const ToolsController = require('../controllers/ToolsController');

const toolResolvers = {
    Query: {
        tools: async () => {
            try {
                const tools = await ToolsController.getTools()
                return tools;
            } catch (error) {
                throw new Error('Error fetching tools: ' + error.message);
            }
        },
        tool: async (parent, { id }) => {
            try {
                const tool = await ToolsController.getToolById(id)
                return tool;
            } catch (error) {
                throw new Error('Error fetching tool: ' + error.message);
            }
        },
    },
    Mutation: {
        createTool: async (parent, { input }) => {
            try {
                const tool = await ToolsController.createTool(input);
                return tool;
            } catch (error) {
                throw new Error('Error creating tool: ' + error.message);
            }
        },
        updateTool: async (parent, { id, input }) => {
            try {
                const tool = await ToolsController.getToolById(id);
                if (!tool) {
                    throw new Error('Tool not found');
                }
                return await ToolsController.updateTool(id, input);
            } catch (error) {
                throw new Error('Error updating tool: ' + error.message);
            }
        },
        deleteTool: async (parent, { id }) => {
            try {
                const tool = await ToolsController.getToolById(id);
                if (!tool) {
                    throw new Error('Tool not found');
                }
                return await ToolsController.deleteTool(id);
            } catch (error) {
                throw new Error('Error deleting tool: ' + error.message);
            }
        },
    },
};

module.exports = toolResolvers;