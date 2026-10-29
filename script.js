const apiKey = "sk_live_kp8UtB1fpedLjV1te0LjAXKsqBh0ggKPCd7cq0Upb47e3e8f"


async function getMovies() {
    try {
        const searchTerm = document.getElementById("search").value
        console.log(searchTerm)

        //http://www.omdbapi.com/?i=tt3896198&apikey=411ff7f8
        const url = "https://recipeapi.io/api/v1/recipes?apikey=" + apiKey + "&search=" + searchTerm;

        const response = await fetch(url);
        const json = await response.json();

        console.log(JSON.stringify(json));

        const movieHolder = document.getElementById("movieHolder");

        for (movie of json.Search) {
            let divContainer = document.createElement('div');
            divContainer.classList.add("card");

            let img = document.createElement('img');
            img.src = movie.Poster
            img.width = 100;


            let card = document.createElement('div');
            card.classList.add('container');
            let titleHeader = document.createElement("h3");
            titleHeader.textContent = movie.Title +": "+movie.Year

            card.appendChild(titleHeader);
            divContainer.appendChild(img);
        
            
            divContainer.appendChild(card);
            movieHolder.appendChild(divContainer)


        }


    }
    catch (error) {
        console.log(error)
    }
}