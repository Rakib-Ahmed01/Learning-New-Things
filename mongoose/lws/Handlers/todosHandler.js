const express = require('express');
const Todo = require('../Schemas/Todo');

const router = express.Router();

// get all the todos
router.get('/', async (_req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// get a todo by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findOne({ _id: id });
  res.json(todo);
});

// create a todo
router.post('/', async (req, res) => {
  try {
    const todo = req.body;
    const result = await Todo.create(todo);
    return res.json(result);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ error: err.message });
  }
});

// update a todo
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const patch = req.body;
  const result = await Todo.findOneAndUpdate({ _id: id }, patch);
  res.json(result);
});

// delete a todo
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await Todo.deleteOne({ _id: id });
  res.json(result);
});

module.exports = router;
