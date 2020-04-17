
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('recipes').insert([
    {name: 'Chicken Soup'}
  ]);
    
};
