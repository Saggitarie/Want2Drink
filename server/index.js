// Imports: Express
const express = require('express');
// Imports: GraphQL
const {SERVER} = require('./schema.js');

const APP = express();
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  APP.use(express.static('build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  APP.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Middleware: GraphQL
  SERVER.applyMiddleware({
  path: '/graphql',
  app: APP
});
// Express: Port
const PORT = process.env.PORT || 4000;

// Express: Listener
APP.listen(process.env.PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`${process.env.REACT_APP_HEROKU_HOST}:${PORT}/graphql`);
});

// APP
// .listen({ port: process.env.BACKPORT || 4000 }, ()=> {
//   console.log(`🚀 app running`)
// })