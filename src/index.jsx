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

// client
//   .query({
//     mutation: gql`
//     mutation AddTodo($type: String!) {
//       addUsers(
//         first_name: "Sato",
//         last_name: "Takeru",
//         email:"takechan@test.com",
//         created_at:${Date.now()}
//       )
//     }
//     `
//   })
//   .then(result => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>, document.getElementById("root"));