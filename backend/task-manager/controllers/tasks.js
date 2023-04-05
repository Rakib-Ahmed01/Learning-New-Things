const createError = require('../errors/createError');
const asyncWrapper = require('../middlewares/asyncWrapper');
const Task = require('../models/Task');

exports.getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

exports.getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    return next(createError(`No task is found with the id ${taskId}`, 404));
  }

  res.status(200).json({ task });
});

exports.createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

exports.updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate(
    {
      _id: taskId,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!task) {
    return next(createError(`No task is found with the id ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

exports.deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });

  if (!task) {
    return next(createError(`No task is found with the id ${taskId}`, 404));
  }

  res.status(200).json({ task });
});
