const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Routes for handling tasks
router.post('/', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
