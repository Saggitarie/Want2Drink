const knex = require("knex")(
  require("../models/knexfile.js")[process.env.NODE_ENV || "development"]
);

module.exports = knex;