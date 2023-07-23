const { Tasks } = require('../models');

async function createTask(req, res) {
    try {
        const { description, responsable, status } = req.body;
        const newTask = await Tasks.create({ description, responsable, status });
        return res.status(201).json(newTask);
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear la tarea.' });
    }
}

async function getTasks(req, res) {
    try {
        const tasks = await Tasks.findAll();
        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener las tareas' });
    }
}

async function getTaskById(req, res) {
    try {
        const { id } = req.params;
        const task = await Tasks.findByPk(id);
        if (!task) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener la tarea por ID' });
    }
}

// Actualizar una tarea por su ID
async function updateTask(req, res) {
    try {
        const { id } = req.params;
        const { description, responsable, status } = req.body;
        const task = await Tasks.findByPk(id);
        if (!task) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        task.description = description;
        task.responsable = responsable;
        task.status = status;
        await task.save();
        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar la tarea' });
    }
}

async function deleteTask(req, res) {
    try {
        const { id } = req.params;
        const task = await Tasks.findByPk(id);
        if (!task) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        await task.destroy();
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
}

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
};