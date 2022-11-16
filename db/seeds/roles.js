/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('roles').del()
  await knex('roles').insert([
    { email: 'parents@gmail.com', role:"parent", studentID:"53416"},
    { email: 'staff@gmail.com', role:"staff"},
  ]);
};
