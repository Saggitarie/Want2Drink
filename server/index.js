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
const PORT = 4000 || process.env;
// Express: Listener
APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});
// Exports
// module.exports= {APP};

// const express = require("express");
// // const bodyParser = require("body-parser");
// // const { graphqlExpress, graphiqlExpress, gql } = require("apollo-server-express")
// const { ApolloServer, gql } = require('apollo-server');
// const { makeExecutableSchema } = require("graphql-tools")
// const { execute, subscribe } = require("graphql");
// const { createServer } = require("http");

// const database = require("./database")

// const PORT = process.env.PORT || 4000
// const HOST = process.env.HOST || 'localhost'

// const typeDefs = gql`
//   type Users { first_name: String!, last_name: String!, email: String!, created_at: String! }
//   type Query { users: [Users] }
// `
// const resolvers = {
//   Query: {
//     users: async () => {
//       const users = await database('users').select()
//       return users
//     },
//   }
// }

// const schema = new ApolloServer({
//   typeDefs,
//   resolvers,
//   playground: {
//     endpoint: "http://localhost:4000/graphql",
//     settings: {
//       "editor.theme": "light"
//     }
//   }
// });

// // const schema = makeExecutableSchema({
// //   typeDefs,
// //   resolvers,
// // });

// const server = express()

// schema.applyMiddleware({
//   server
// });

// // export default schema;

// // server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
// // server.use('/graphql', graphqlExpress({ schema }))

// // server.use(
// //   '/graphiql',
// //   graphiqlExpress({
// //     endpointURL: '/graphql',
// //     subscriptionsEndpoint: `ws://${HOST}:${PORT}/subscriptions`,
// //   })
// // )

// // server.listen(PORT, () => {
// //   console.log(`Go to http://${HOST}:${PORT}/graphiql to run queries!`)
// // })