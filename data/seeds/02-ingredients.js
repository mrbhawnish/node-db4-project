
exports.seed = function(knex) {

      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'Garam Masala'},
        { name: 'Garlic'},
        { name: 'Turmeric'},
        { name: 'Onion'},
        { name: 'Tomato'},
        { name: 'Goat'},
      ]);
};
