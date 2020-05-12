// Imports: Express
const express = require('express');
// Imports: GraphQL
const {SERVER} = require('./schema.js');
const { gql } = require('apollo-server');


// const link = new HttpLink({
//   uri: 'http://localhost:4000/graphql'
// });

// const client = new ApolloClient({
//   link
// });

const APP = express();

  // client
  // .query({
  //   users: gql`
  //     {
  //       first_name: String!,
  //       }
  //     }
  //   `
  // }).then(result => console.log(result));

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