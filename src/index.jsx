import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import App from "./App";

let GRAPHQL_BASE_URL;
const BACKPORT = process.env.PORT || 4000;
if(process.env.NODE_ENV === "development"){
  GRAPHQL_BASE_URL = `https://want2drink.herokuapp.com:${BACKPORT}/graphql` ;
  // GRAPHQL_BASE_URL = `${process.env.REACT_APP_HEROKU_HOST}:${PORT}/graphql` ;
}else {
  GRAPHQL_BASE_URL = `https://want2drink.herokuapp.com:${BACKPORT}/graphql`;
}
// const HOST = process.env.HEROKU_HOST || process.env.LOCAL_HOST;
// const HOST = process.env.LOCAL_HOST;

// const GRAPHQL_BASE_URL = '/graphql';
// const GRAPHQL_BASE_URL = `${process.env.REACT_APP_LOCAL_HOST}:${PORT}/graphql` ;

const client = new ApolloClient({
  uri: `https://want2drink.herokuapp.com:${process.env.PORT}/graphql`,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>, document.getElementById("root"));