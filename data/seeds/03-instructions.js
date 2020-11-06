
exports.seed = function(knex) {

      // Inserts seed entries
      return knex('instructions').insert([
        { instructions: "Step 1). add chicken, Step 2). add curry, Step 3). Add Masala ", 
        recipe_id: 1 },
        { instructions: "Step 1). add chicken, Step 2). add butter gravy, Step 3). Add some Masala ", 
        recipe_id: 2 },
        { instructions: "Step 1). add goat, Step 2). add curry powder, Step 3). Heat and wait ", 
        recipe_id: 3 }
      ]);
};
