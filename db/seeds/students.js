/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('students').del()
  await knex('students').insert([
    {first_name:"Jake", last_name: 'Michaels', image:"👦", student_unique_ID:"53416",route:"route_1"},
    {first_name:"Chiyo", last_name: 'Nakamura', image:"👧", student_unique_ID:"59462",route:"route_1"},
    {first_name:"Noah", last_name: 'Watanabe', image:"👦", student_unique_ID:"97625",route:"route_1"},
    {first_name:"Sakura", last_name: 'Yamamoto', image:"👧", student_unique_ID:"46297",route:"route_1"},
    {first_name:"Aoki", last_name: 'Suzuki', image:"👦", student_unique_ID:"26479",route:"route_1"},
    {first_name:"Hana", last_name: 'Saito', image:"👧", student_unique_ID:"44986",route:"route_2"},
    {first_name:"Daichi", last_name: 'Tanaka', image:"👦", student_unique_ID:"33784",route:"route_2"},
    {first_name:"Kumiko", last_name: 'Sato', image:"👧", student_unique_ID:"64982",route:"route_2"},
    {first_name:"Ichiro", last_name: 'Yamada', image:"👦", student_unique_ID:"31794",route:"route_2"},
    {first_name:"Megumi", last_name: 'Ito', image:"👧", student_unique_ID:"36472",route:"route_2"}
  ]);
};
