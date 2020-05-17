// Imports: Express
const express = require('express');
// Imports: GraphQL
const {SERVER} = require('./schema.js');

const APP = express();
const path = require('path');

// if (process.env.NODE_ENV === 'production') {
// 	APP.use(express.static('client/build'));
// }
// APP.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
// });

// Middleware: GraphQL
  SERVER.applyMiddleware({
  app: APP
});
// Express: Port
const PORT = process.env.BACKPORT || 4000;

// Express: Listener
// APP.listen(PORT, () => {
//   console.log(`The server has started on port: ${PORT}`);
//   console.log(`${process.env.REACT_APP_HEROKU_HOST}:${PORT}/graphql`);
// });

APP
.listen({ port: process.env.BACKPORT || 4000 }, ()=> {
  console.log(`🚀 app running`)
})