// require packages
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./schema/graphqlSchema');
const { connectDB } = require('./utils/db');

// initialize app
const app = express();
const port = process.env.PORT || 5000;

// use middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect database
connectDB();

// main graphql route
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// listen to the requests
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
