
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, ingredient_quantity: 3.4},
        {recipe_id: 1, ingredient_id: 2, ingredient_quantity: 2.2},
        {recipe_id: 2, ingredient_id: 2, ingredient_quantity: 3.9},
        {recipe_id: 3, ingredient_id: 3, ingredient_quantity: 1.4}
      ]);
};
