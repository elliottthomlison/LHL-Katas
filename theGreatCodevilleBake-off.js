https://youtu.be/l155liDxty8

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  return recipes.filter(recipe =>
    bakeryA.some(bakeryAIngredient => recipe.ingredients.includes(bakeryAIngredient)) &&
    bakeryB.some(bakeryBIngredient => recipe.ingredients.includes(bakeryBIngredient))
  )[0].name;
}

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    // Code here!
    
    //loop through the given recipes
    for(let i = 0; i < recipes.length; i++){

        //determine if the first ingredient is in bakeryA or bakeryB
        let firstIngredientA = (bakeryA.indexOf(recipes[i].ingredients[0]) > -1);
        let firstIngredientB = (bakeryB.indexOf(recipes[i].ingredients[0]) > -1);

        //determine if the second ingredient is in bakeryA or bakeryB
        let secondIngredientA = (bakeryA.indexOf(recipes[i].ingredients[1]) > -1);
        let secondIngredientB = (bakeryB.indexOf(recipes[i].ingredients[1]) > -1);

            //if the first ingredient is in bakeryA OR bakeryB AND the second ingredient is in bakeryA OR bakeryB
            if ((firstIngredientA || firstIngredientB) && (secondIngredientA || secondIngredientB)){
                return(recipes[i].name);
            }
    }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));