// Imports: GraphQL
const { gql } = require('apollo-server');

// GraphQL: TypeDefs
const TYPEDEFS = gql`
type Users {
    first_name: String!,
    last_name: String!,
    email: String!,
    created_at: String!
}

type Query {
  users: [Users]
}

type Mutation {
  addUsers(first_name: String!, last_name: String!, email: String!, created_at: String!): String!
}
`;

// Exports
module.exports={ TYPEDEFS };