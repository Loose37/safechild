/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.table("route_2", table => {
    table.dropColumn("got_on_bus");
    table.dropColumn("got_off_bus");
    table.dropColumn("time_when_got_on_bus");
    table.dropColumn("time_when_got_off_bus");
    table.dropColumn("got_to_class");
    table.dropColumn("got_out_off_class");
    table.dropColumn("time_when_got_to_class");
    table.dropColumn("time_when_got_out_of_class");
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("route_2")
  
};
