const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Task name is required'],
    trim: true,
    maxlength: [20, 'Task name can not be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = model('Task', taskSchema);

module.exports = Task;
