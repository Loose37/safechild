/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('route_1').del()
  await knex('route_1').insert([
    { student_unique_ID: '53416'},
    { student_unique_ID: '59462'},
    { student_unique_ID: '97625'},
    { student_unique_ID: '46297'},
    { student_unique_ID: '26479'}
  ]);
};
