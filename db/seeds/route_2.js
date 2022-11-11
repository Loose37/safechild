/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('route_2').del()
  await knex('route_2').insert([
    { student_unique_ID: '44986'},
    { student_unique_ID: '33784'},
    { student_unique_ID: '64982'},
    { student_unique_ID: '31794'},
    { student_unique_ID: '36472'}
  ]);
};
