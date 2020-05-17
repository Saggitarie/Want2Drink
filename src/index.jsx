import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import App from "./App";

let GRAPHQL_BASE_URL;
const PORT = process.env.PORT || 4000;
if(process.env.NODE_ENV === "development"){
  GRAPHQL_BASE_URL = `${process.env.REACT_APP_LOCAL_HOST}:${PORT}/graphql` ;
}else {
  GRAPHQL_BASE_URL = `${process.env.REACT_APP_HEROKU_HOST}:${PORT}/graphql` ;
}
// const HOST = process.env.HEROKU_HOST || process.env.LOCAL_HOST;
// const HOST = process.env.LOCAL_HOST;

// const GRAPHQL_BASE_URL = '/graphql';
// const GRAPHQL_BASE_URL = `${process.env.REACT_APP_LOCAL_HOST}:${PORT}/graphql` ;

const client = new ApolloClient({
  uri: GRAPHQL_BASE_URL,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>, document.getElementById("root"));