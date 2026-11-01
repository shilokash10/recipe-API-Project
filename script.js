//API key from THEMEALDB. API test key "1" is only used for the development of your app or educational purposes
//https://www.themealdb.com/api.php

const apiKey = "1";


async function getRecipes() {
    try {
        const searchTerm = document.getElementById("search").value
        console.log(searchTerm)

        const url = "https://www.themealdb.com/api/json/v1/" + apiKey + "/search.php?s=" + searchTerm;

        const response = await fetch(url);
        
        const json = await response.json();
        console.log(JSON.stringify(json));

        const recipeHolder = document.getElementById("recipeHolder");

        for (const recipe of json.meals) {
            let divContainer = document.createElement('div');
            divContainer.classList.add("card");

            let img = document.createElement('img');
            //adjusting the dimensions of the image
            img.src = recipe.strMealThumb;
            img.width = 200;
            img.height = 200;

            let card = document.createElement('div');
            card.classList.add('container');
            
            //title of the recipe or meal
            let titleHeader = document.createElement("h3");
            titleHeader.textContent = recipe.strMeal;

            //cuisine of recipe
            let cuisine = document.createElement("p");
            cuisine.textContent = "Cuisine: " + recipe.strArea;

            //instructions on how to make recipe
            let instructions = document.createElement("p");
            instructions.textContent = "Instructions: " + recipe.strInstructions;

            //ingredient items
            //listing the first 6 ingredient items 
            // (many items had/more or less ingredients but the blank spaces looked strange 
            // on the recipe cards so I decided to only include the first 6)
            let ingredients = document.createElement("p");
            ingredients.textContent = "Ingredients: " 
            + recipe.strIngredient1 + ", " 
            + recipe.strIngredient2 + ", " 
            + recipe.strIngredient3 + ", " 
            + recipe.strIngredient4 + ", " 
            + recipe.strIngredient5 + ", " 
            + recipe.strIngredient6 + ", " ;
     
        //adding the title, cuisine, instructions, image, and ingredients to the card
            card.appendChild(titleHeader);
            card.appendChild(cuisine);
            card.appendChild(instructions);
            card.appendChild(ingredients);
            
            divContainer.appendChild(img);
            divContainer.appendChild(card);

            recipeHolder.appendChild(divContainer);
        }
    }
    catch (error) {
        console.log(error)
    }
}