
exports.seed = function(knex) {

      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Chicken Curry'},
        {id: 2, name: 'Butter Chicken'},
        {id: 3, name: 'Goat Curry'}
      ]);

};
