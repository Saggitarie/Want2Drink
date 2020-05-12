// Imports: Express
const express = require('express');
// Imports: GraphQL
const {SERVER} = require('./schema.js');
const { gql } = require('apollo-server');

const APP = express();

// Middleware: GraphQL
  SERVER.applyMiddleware({
  app: APP
});
// Express: Port
const PORT = 4000 || process.env;
// Express: Listener
APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});