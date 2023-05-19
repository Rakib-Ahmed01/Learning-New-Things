// require packages
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');

// initialize app
const app = express();
const port = process.env.PORT || 5000;

// use middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/graphql', graphqlHTTP({}));

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
