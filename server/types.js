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

type UserLocations{
    first_name: String!,
    last_name: String!,
    longitude: Float!,
    latitude: Float!,
    drinking_place_name: String!,
    location_set_time: String!
}

type Query {
  users: [Users],
  getUsersLocations: [UserLocations]
}

type Mutation {
  addUsers(first_name: String!, last_name: String!, email: String!, created_at: String!): String!
}
`;
// Exports
module.exports={ TYPEDEFS };