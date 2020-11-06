
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', (tbl) => {
        tbl.increments()
        tbl.text('name').unique().notNullable();    
    })
    .createTable('ingredients', (tbl) => {
        tbl.increments()
        tbl.text('name')
        .notNullable()
        .unique()
    })
    .createTable('instructions', (tbl) => {
        tbl.increments()
        tbl.text("instructions")
        tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable('recipes_ingredients', tbl =>{ 
    tbl.increments()
    tbl.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('recipes')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
    tbl.integer('ingredient_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('ingredients')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
    tbl.float('ingredient_quantity') 
    .unsigned()
    .notNullable()
  })    
};

exports.down = function(knex) {
    // drop table down
  return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')

};
