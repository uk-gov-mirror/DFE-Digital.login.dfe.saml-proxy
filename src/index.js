const express = require('express');
const setupRouterMiddleware = require('./routes');

const app = express();
const {
  PORT,
} = process.env;

setupRouterMiddleware(app);
app.listen(PORT);
