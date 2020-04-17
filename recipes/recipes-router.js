const express = require("express");

const Recipe = require("./recipe-model.js")

const router = express.Router();


router.get("/", (req,res) => {
    Recipe.find()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => res.status(500).json({errorMessage: "Unable to get Recipes"}))
})


router.get("/:id/ingredients", (req,res) => {
    const {id} = req.params;

    Recipe.getShoppingList(id)
        .then(ingredients => {
            res.status(200).json(ingredients);
        })
        .catch(err => res.status(500).json({errorMessage: "Unable to get Ingredients for that Recipe id"}))
})


router.get("/:id/instructions", (req,res) => {
    const {id} = req.params;

    Recipe.getInstructions(id)
        .then(instructions => {
            res.status(200).json(instructions)
        })
        .catch(err => res.status(500).json({errorMessage: "Unable to get instuctions for that Recipe id"}))
})




module.exports = router;