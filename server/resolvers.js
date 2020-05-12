const database = require("./database")

const RESOLVERS = {
  Query: {
    users: async () => {
      const users = await database('users').select()
      return users
    },
    getUsersLocations: async () => {
      const userInfos = await database("drinking_location")
      .innerJoin("users","drinking_location.user_location_id", "users.id")
      .select(
        "users.first_name",
        "users.last_name",
        "drinking_location.longitude",
        "drinking_location.latitude",
        "drinking_location.drinking_place_name",
        "drinking_location.location_set_time",
      )

      return userInfos;
    }
  },
  Mutation: {
    addUsers: async (_, {first_name, last_name, email, created_at}) => {
      const[id] = await database("users")
      .returning("id")
      .insert({ first_name, last_name, email, created_at });

      return id;
    },
    addCurrentLocation: async (_, {longitude, latitude, drinking_place_name, location_set_time, time_expiration, user_location_id}) => {
      const [id] = await database("drinking_location")
      .returning("id")
      .insert({longitude, latitude, drinking_place_name, location_set_time, time_expiration, user_location_id})

      return id;
    }


  }
}

module.exports={RESOLVERS};