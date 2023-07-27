const { ToolsModel, UsersModel } = require('../models');

async function createTool(data) {
    try {
        const newTool = await ToolsModel.create(data);
        return newTool;
    } catch (error) {
        throw new Error(`Error al crear la herramienta: ${error}`);
    }
}

async function getTools() {
    try {
        const tools = await ToolsModel.findAll({
            include: {
                model: UsersModel,
                as: 'user'
            }
        });

        return tools;
    } catch (error) {
        throw new Error(`Error al obtener las herramientas: ${error}`);
    }
}

async function getToolById(id) {
    try {
        const tool = await ToolsModel.findByPk(id, {
            include: {
                model: UsersModel,
                as: 'user'
            }
        });

        if (!tool) {
            throw new Error('Herramienta no encontrada');
        }

        return tool;
    } catch (error) {
        throw new Error(`Error al obtener la herramienta: ${error}`);
    }
}

async function updateTool(id, data) {
    try {
        const [rowsUpdated, [updatedTool]] = await ToolsModel.update(data, {
            where: { id },
            returning: true
        });
        if (rowsUpdated === 0) {
            throw new Error('Herramienta no encontrada');
        }
        return updatedTool;
    } catch (error) {
        throw new Error(`Error al actualizar la herramienta: ${error}`);
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
        throw new Error(`Error al eliminar la herramienta: ${error}`);
    }
}

module.exports = {
    createTool,
    getTools,
    getToolById,
    updateTool,
    deleteTool,
};