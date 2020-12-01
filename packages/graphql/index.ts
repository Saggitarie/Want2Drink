import { ApolloServer, gql } from 'apollo-server-express';

import { LoginResolver } from '../graphql/modules/Login';
import { buildSchema } from 'type-graphql';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const schema: any = buildSchema({
  resolvers: [LoginResolver],
});

const server = new ApolloServer({ schema });

export default server;
