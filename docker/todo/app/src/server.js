const express = require('express');
const path = require('path');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 3000;
const uri = 'mongodb://admin:secret@localhost:27017';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/todos', async (req, res) => {
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });
    const db = client.db('todos');
    const Todos = db.collection('todos');
    const result = await Todos.find({}).toArray();
    res.status(200).send(result);
  } catch (error) {
    console.error('Error querying MongoDB:', error);
    res.status(500).send('Error querying MongoDB');
  }
});

app.post('/todos', async (req, res) => {
  try {
    const title = req.body;
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });
    const db = client.db('todos');
    const Todos = db.collection('todos');

    const createdTodo = await Todos.insertOne(title);
    const insertedTodoId = createdTodo._id;
    const insertedTodo = await Todos.findOne({ _id: insertedTodoId });

    res.status(200).send(insertedTodo);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
