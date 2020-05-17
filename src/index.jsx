import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import App from "./App";

const PORT = process.env.PORT || 4000;
// const GRAPHQL_BASE_URL = '/graphql';
const GRAPHQL_BASE_URL = `http://localhost:${PORT}/graphql`;

const client = new ApolloClient({
  uri: GRAPHQL_BASE_URL,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>, document.getElementById("root"));