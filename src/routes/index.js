const express = require('express');
const router = express.Router();

const toolsController = require('../controllers/toolsController');

router.post('/tools', toolsController.createTool);
router.get('/tools', toolsController.getTools);
router.get('/tools/:id', toolsController.getToolsById);
router.put('/tools/:id', toolsController.updateTool);
router.delete('/tools/:id', toolsController.deleteTool);


module.exports = router;