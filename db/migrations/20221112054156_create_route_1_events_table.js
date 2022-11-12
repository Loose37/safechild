/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("route_1_events", (table) => {
    table.string("student_unique_ID").primary;
    table.boolean("got_on_bus");
    table.boolean("got_off_bus");
    table.timestamp("time_when_got_on_bus");
    table.timestamp("time_when_got_off_bus");
    table.boolean("got_to_class");
    table.boolean("got_out_off_class");
    table.timestamp("time_when_got_to_class");
    table.timestamp("time_when_got_out_of_class");
    
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("route_1_events")
  
};
