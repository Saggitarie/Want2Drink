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
`;
// Exports
module.exports={ TYPEDEFS };