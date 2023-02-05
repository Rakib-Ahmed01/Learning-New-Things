const express = require('express');

const adminRouter = express.Router();

adminRouter.get('/', (_req, res) => {
  throw new Error();
  res.send({ messgae: 'Admin Page' });
});

module.exports = adminRouter;
