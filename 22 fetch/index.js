// fetch = Function used for making HTTP requests to fetch resourses.
//         (JSON style data, images, files)
//         Simplifiles asynchronous data fetching in JavaScript and used for interacting
//         with APIs to retrive and send data asynchronously over the web.
//         fetch(url, {options})
//         fetch(url, {method: "GET"}) // default
//         fetch(url, {method: "POST"}) // send data
//         fetch(url, {method: "PUT"}) // replace data
//         fetch(url, {method: "DELETE"}) // delete data



// // 1
// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//        .then(response => console.log(response))
//        .catch(error => console.error(error));
// // 2
// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//        .then(response => response.json())
//        .then(data => console.log(data.name))
//     //    .then(data => console.log(data.id))
//     //    .then(data => console.log(data.weight))
//        .catch(error => console.error(error));
// // 3
// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//        .then(response => {

//             if(!response.ok) {
//                 throw new Error("Could not fetch resourse");
//             }
            
//             return response.json();
//        })
//        .then(data => console.log(data.name))
//        .catch(error => console.error(error));

// 3 but async (so we can use await with in)
// fetchData();
async function fetchData() {
    
    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        // console.log(pokemonName);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        
        // console.log(response);
        if(!response.ok) {
            throw new Error("Could not fetch resourse");
        }
        
        const data = await response.json(); // converts our response to json
        // console.log(data.name);
        const pokemonSprite = data.sprites.front_default; // img src 
        // console.log(pokemonSprite);
        const imgElement = document.getElementById("pokemonSprite"); 

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";


    } catch (error) {
        console.error(`Something went wrong: ${error}`);
    }
}