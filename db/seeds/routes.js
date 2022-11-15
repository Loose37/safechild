/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('routes').del()
  await knex('routes').insert([
    {all_routes: 'route 1'},
    {all_routes: 'route 2'},
  ]);
};
