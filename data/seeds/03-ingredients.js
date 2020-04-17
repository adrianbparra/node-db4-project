
exports.seed = function(knex) {

  // Inserts seed entries
  return knex('ingredients').insert([
    {recipe_id: 1, name: "table spoon butter", quantity: 1},
    {recipe_id: 1, name: "cup chopped onion", quantity: .5},
    {recipe_id: 1, name: "cup chopped celery", quantity: .5},
    {recipe_id: 1, name: "oz chicken broth", quantity: 56},
    {recipe_id: 1, name: "oz vegetable broth", quantity: 14},
    {recipe_id: 1, name: "pound chopped cooked chicken breast", quantity: .5},
    {recipe_id: 1, name: "cups egg noodles", quantity: 1.5},
    {recipe_id: 1, name: "cup sliced carrots", quantity: 1},
    {recipe_id: 1, name: "teaspoon dried basil", quantity: .5},
    {recipe_id: 1, name: "teaspoon dried oregano", quantity: .5},
    {recipe_id: 1, name: "salt", quantity: 1},
    {recipe_id: 1, name: "peper", quantity: 1},
  ]);
    
};
