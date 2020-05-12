const database = require("./database")

const RESOLVERS = {
  Query: {
    users: async () => {
      const users = await database('users').select()
      return users
    },
  },
  Mutation: {
    addUsers: async (_, {first_name, last_name, email, created_at}) => {
      const[id] = await database("users")
      .returning("id")
      .insert({ first_name, last_name, email, created_at });

      return id;
    }
  }
}

module.exports={RESOLVERS};