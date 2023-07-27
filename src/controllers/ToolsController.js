const { ToolsModel, UsersModel } = require('../models');

async function createTool(data) {
    try {
        const newTool = await ToolsModel.create(data);
        return newTool;
    } catch (error) {
        throw new Error('Error al crear la herramienta');
    }
}

async function getTools() {
    try {
        const tools = await ToolsModel.findAll({
            include: {
                model: UsersModel,
                as: 'users'
            }
        });
        return tools;
    } catch (error) {
        throw new Error('Error al obtener las herramientas');
    }
}

async function getToolById(id) {
    try {
        const tool = await ToolsModel.findByPk(id, {
            include: {
                model: UsersModel,
                as: 'users'
            }
        });
        if (!tool) {
            throw new Error('Herramienta no encontrada');
        }
        return tool;
    } catch (error) {
        throw new Error('Error al obtener la herramienta');
    }
}

async function updateTool(id, data) {
    try {
        const tool = await ToolsModel.findByPk(id);
        if (!tool) {
            throw new Error('Rol no encontrado');
        }
        await tool.update(data);
        return tool;
    } catch (error) {
        throw new Error('Error al actualizar la herramienta');
    }
}

async function deleteTool(id) {
    try {
        const tool = await ToolsModel.findByPk(id);
        if (!tool) {
            throw new Error('Herramienta no encontrada');
        }
        await tool.destroy();

        //const deleted = await ToolsModel.destroy({
        //   where: { id },
        //});

        return id;
    } catch (error) {
        throw new Error('Error al eliminar la herramienta');
    }
}

module.exports = {
    createTool,
    getTools,
    getToolById,
    updateTool,
    deleteTool,
};