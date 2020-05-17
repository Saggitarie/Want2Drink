const { ApolloServer } = require('apollo-server-express');

// Imports: GraphQL TypeDefs & Resolvers
const {TYPEDEFS} = require('./types.js');
const {RESOLVERS} =require('./resolvers.js');

// GraphQL: Schema
const PORT = process.env.PORT || 4000;
const SERVER = new ApolloServer({
  typeDefs: TYPEDEFS,
  resolvers: RESOLVERS,
  playground: {
    endpoint: `${process.env.HEROKU_HOST}:${PORT}/graphql`,
    // endpoint: `${process.env.REACT_APP_LOCAL_HOST}:${process.env.PORT}/graphql`,
    settings: {
      'editor.theme': 'light'
    }
  },
  introspection: true
});

// Exports
module.exports={SERVER};