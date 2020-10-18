
const resultContainer = document.querySelector(".results");
const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";



async function callApi() {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    resultContainer.innerHTML = "";

    const results = json.results;

        results.forEach(function (results) {
 
        resultContainer.innerHTML += `<a href="question3.html?id=${results.id}" class="results">${results.name}
                                        <p>${results.released}</p>
                                        <p>Reviews count: ${results.reviews_count}</p>
                                        <img src="${results.background_image}" alt=${results.name}</img>
        
             
        
                                     </a>`;
        

        });
}

callApi();