
exports.up = function(knex) {
  return knex.schema.createTable("drinking_location", (table) => {
    table.increments().index(); // Auto increments events id

    table.integer("longitude").notNullable();
    table.integer("latitude").notNullable();

    table.string("drinking_place_name", 100).notNullable();

    table.timestamp("location_set_time").notNullable().defaultTo(knex.fn.now()); // time when the user set their drinking location

    table.boolean("time_expiration") // Expires after 2 hours

    table.integer("user_location_id");
    table.foreign("user_location_id").references("users.id");
  });
}


exports.down = function(knex) {
  return knex.schema.dropTable("drinking_location");
};
