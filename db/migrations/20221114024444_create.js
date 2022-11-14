/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("roles", (table) => {
    table.increments("id");
    table.string("email", 255)
    .notNullable();
    table.string("role", 255)
    .notNullable();
    
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("roles");
  
};
