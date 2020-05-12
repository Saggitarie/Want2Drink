
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").index();

    table.string("first_name", 30).notNullable();

    table.string("last_name", 30).notNullable();

    table.string("email", 50).notNullable();

    table.string("created_at", 50).notNullable(); // default to the current time
    // table.string("created_at", 50).notNullable().defaultTo(knex.fn.now()); // default to the current time
  });
};

exports.down = function(knex) {
  // undo this migration by destroying the 'users' table
  return knex.schema.dropTable("users");
};
