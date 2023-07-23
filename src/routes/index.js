const express = require('express');
const router = express.Router();

const toolsController = require('../controllers/toolsController');

router.post('/tools', toolsController.createTool);
router.get('/tools', toolsController.getTools);
router.get('/tools/:id', toolsController.getToolsById);
router.put('/tools/:id', toolsController.updateTool);
router.delete('/tools/:id', toolsController.deleteTool);


const tasksController = require('../controllers/tasksController');

router.post('/tasks', tasksController.createTask);
router.get('/tasks', tasksController.getTasks);
router.get('/tasks/:id', tasksController.getTaskById);
router.put('/tasks/:id', tasksController.updateTask);
router.delete('/tasks/:id', tasksController.deleteTask);


module.exports = router;