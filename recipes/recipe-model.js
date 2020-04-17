const db = require("../data/db-config.js");


function find(){
    return db("recipes")
}


function getShoppingList(recipe_id){

    return db("ingredients").where({recipe_id})
}

function getInstructions(recipe_id){
    return db("steps").where({recipe_id})
}


module.exports = {
    find,
    getShoppingList,
    getInstructions
}