const express = require("express");
const Recipes = require("../recipes/recipes-model");

const router = express.Router();

router.get("/", async (req, res) => {
   const recipes = await Recipes.getAllRecipes()
   res.json(recipes)
});


//a list of ingredients and quantites for a single recipe
router.get("/:id/shoppingList", async (req, res) => {
 const recipes = Recipes.getIngredientsAndQuant(req.params.id)
  res.json(recipes)
});

router.post("/", (req, res) => {
  
});

router.put("/:id", (req, res) => {

});

router.delete("/:id", (req, res) => {
 

});

module.exports = router;
