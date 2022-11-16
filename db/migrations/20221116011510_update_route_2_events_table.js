/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable("route_2_events", function(table) {
    table.string('time_when_got_on_bus').alter();
    table.string('time_when_got_off_bus').alter();
    table.string("time_when_got_to_class").alter();
    table.string("time_when_got_out_of_class").alter();

  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("route_2_events")
};
