/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("students", (table) => {
    table.increments("id");
    table.string("first_name", 255)
    .notNullable();
    table.string("last_name", 255)
    .notNullable();
    table.string("image", 255)
    .notNullable();
    table.string("student_unique_ID", 255)
    .notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("students");
  
};
