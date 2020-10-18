  
const gameStyle = document.querySelector(".game-style");

const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

console.log(params);

const id = params.get("id");

console.log(id);

const newUrl = "https://api.rawg.io/api/games/" + id;

console.log(newUrl);

async function fetchGame() {
    
    try {
        const response = await fetch(newUrl);
        const description = await response.json();

    console.log(description);

    newHtml(description);

    } 
    catch(error) {
        console.log(error);
    }
  
}

fetchGame();


function newHtml (description) {
    gameStyle.innerHTML = `
                              <h1>${description.name}</h1>
                              <img src="${description.background_image}" alt=${description.name}</img>
                                <div>${description.description}</div>
                                <time>Released: ${description.released}</time>`;
}

