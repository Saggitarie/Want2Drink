import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { gql } from "apollo-boost";

import App from "./App";

const GRAPHQL_BASE_URL = 'http://localhost:4000/graphql';

const client = new ApolloClient({
  uri: GRAPHQL_BASE_URL,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>, document.getElementById("root"));