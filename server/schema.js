const { ApolloServer } = require('apollo-server-express');

// Imports: GraphQL TypeDefs & Resolvers
const {TYPEDEFS} = require('./types.js');
const {RESOLVERS} =require('./resolvers.js');

// GraphQL: Schema
const SERVER = new ApolloServer({
  typeDefs: TYPEDEFS,
  resolvers: RESOLVERS,
  playground: {
    endpoint: `${process.env.REACT_APP_HEROKU_HOST}:${process.env.PORT}/graphql`,
    // endpoint: `${process.env.REACT_APP_LOCAL_HOST}:${process.env.PORT}/graphql`,
    settings: {
      'editor.theme': 'light'
    }
  }
});

// Exports
module.exports={SERVER};