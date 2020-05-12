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

type DrinkingLocations{
  longitude: Float!,
  latitude: Float!,
  drinking_place_name: String!,
  location_set_time: String!,
  time_expiration: Boolean!,
  user_location_id: Int!
}

input Locations{
  longitude: Float!,
  latitude: Float!,
  drinking_place_name: String!,
  location_set_time: String!,
  time_expiration: Boolean!,
  user_location_id: Int!
}

type Query {
  users: [Users],
  getUsersLocations: [UserLocations],
  checkUser(first_name: String!): Users
}

type Mutation {
  addUsers(first_name: String!, last_name: String!, email: String!, created_at: String!): String!,
  addCurrentLocation(longitude: Float!,latitude: Float!,drinking_place_name: String!,location_set_time: String!,time_expiration: Boolean!,user_location_id:Int!): Int!
}
`;
// Exports
module.exports={ TYPEDEFS };