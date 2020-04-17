
exports.seed = function(knex) {

  // Inserts seed entries
  return knex('steps').insert([
    { recipe_id: 1, step_number: 1, instructions: "In a large pot over medium heat, melt butter."},
    {recipe_id: 1, step_number: 2, instructions: "Cook onion and celery in butter until just tender, 5 minutes."},
    {recipe_id: 1, step_number: 3, instructions: 'Pour in chicken and vegetable broths and stir in chicken, noodles, carrots, basil, oregano, salt and pepper.'},
    {recipe_id: 1,step_number: 4, instructions: 'Bring to a boil, then reduce heat and simmer 20 minutes before serving.'}
  ]);
    
};
