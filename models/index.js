module.exports = (knex) => {
  return {
    users: require("./users")(knex),
    events: require("./drinking_locations")(knex),
  };
};
