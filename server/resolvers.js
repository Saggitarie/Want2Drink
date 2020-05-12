const database = require("./database")

const RESOLVERS = {
  Query: {
    users: async () => {
      const users = await database('users').select()
      return users
    },
  }
}

module.exports={RESOLVERS};