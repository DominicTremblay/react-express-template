exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", t => {
    t.increments().primary();
    t.string("username").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
