const apiKey = "sk_live_kp8UtB1fpedLjV1te0LjAXKsqBh0ggKPCd7cq0Upb47e3e8f"


async function getRecipes() {
    try {
        const searchTerm = document.getElementById("search").value
        console.log(searchTerm)

        const url = "https://recipeapi.io/api/v1/recipes?apikey=" + apiKey + "&search=" + searchTerm;

        const response = await fetch(url);
        const json = await response.json();
        console.log(JSON.stringify(json));

        const recipeHolder = document.getElementById("recipeHolder");

        for (const recipe of json.data) {
            let divContainer = document.createElement('div');
            divContainer.classList.add("card");

            let img = document.createElement('img');
            img.src = recipe.image;
            img.width = 100;


            let card = document.createElement('div');
            card.classList.add('container');
            let titleHeader = document.createElement("h3");

            titleHeader.textContent = recipe.name

            card.appendChild(titleHeader);
            divContainer.appendChild(img);
        
            
            divContainer.appendChild(card);
            recipeHolder.appendChild(divContainer)


        }


    }
    catch (error) {
        console.log(error)
    }
}