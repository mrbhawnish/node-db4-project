const db = require('../data/db-config.js');

module.exports = {
    getAllRecipes(){
        return db('recipes')
    },
    getIngredientsAndQuant(id){
        return db('recipes as r')
        .join('recipes_ingredients as r_i, r.id, r_i.recipe_id')
        .select('r.name', 'r_i.ingredient_quantity')
        .where('r.id', id)
    },
    getIntructions(id){
        return db('recipes as r')
        .join('intructions as i', 'r.id', 'i.recipe_id')
        .select('r.name', 'i.instructions')
        .where('i.recipe_id', id)
    },
    getRecipesByIngredient(id){
        return db('recipes as r')
        .join('recipes_ingredients as r_i', 'r.id', 'r_i.recipe_id')
        .select('r.name')
        .where('r_i.id', id)
    }

}