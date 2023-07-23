const { Tools } = require('../models');

async function createTool(req, res) {
    try {
        const { name, value, status } = req.body;
        const newTool = await Tools.create({ name, value, status });
        return res.status(201).json(newTool);
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear la herramienta' });
    }
}

async function getTools(req, res) {
    try {
        const tools = await Tools.findAll();
        return res.status(200).json(tools);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener las herramientas' });
    }
}

async function getToolsById(req, res) {
    try {
        const { id } = req.params;
        const tool = await Tools.findByPk(id);
        if (!tool) {
            return res.status(404).json({ error: 'Herramienta no encontrada' });
        }
        return res.status(200).json(tool);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener la herramienta' });
    }
}

async function updateTool(req, res) {
    try {
        const { id } = req.params;
        const { name, value, status } = req.body;
        const tool = await Tool.findByPk(id);
        if (!tool) {
            return res.status(404).json({ error: 'Herramienta no encontrada' });
        }
        tool.name = name;
        tool.value = value;
        tool.status = status;
        await tool.save();
        return res.status(200).json(tool);
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar la herramienta' });
    }
}

async function deleteTool(req, res) {
    try {
        const { id } = req.params;
        const tool = await Tools.findByPk(id);
        if (!tool) {
            return res.status(404).json({ error: 'Herramienta no encontrada' });
        }
        await tool.destroy();
        return res.status(204).json(); // Respuesta exitosa sin contenido
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar la herramienta' });
    }
}

module.exports = {
    createTool,
    getTools,
    getToolsById,
    updateTool,
    deleteTool
};