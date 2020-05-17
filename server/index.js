// Imports: Express
const express = require('express');
// Imports: GraphQL
const {SERVER} = require('./schema.js');

const APP = express();

// Middleware: GraphQL
  SERVER.applyMiddleware({
  app: APP
});
// Express: Port
const PORT = process.env.PORT || 4000;

// Express: Listener
APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});