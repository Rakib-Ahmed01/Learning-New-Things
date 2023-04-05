const express = require('express');
const {
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getTasks,
} = require('../controllers/tasks');
const router = express.Router();

router.route('/').get(getTasks).post(createTask);

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = {
  taskRouter: router,
};
