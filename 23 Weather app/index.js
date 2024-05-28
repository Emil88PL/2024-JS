const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = ""; // api key from // https://openweathermap.org/api

weatherForm.addEventListener("submit", async event => {

    // prevent from refreshing the page after clicking submit
    event.preventDefault();

    const city = cityInput.value;
    console.log(city);
    if(city) {

        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error);
        }

    } else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    // we can use await because we are in async function
    const response = await fetch(apiUrl);

    if(!response.ok) {
        throw new Error("Could not fetch weather data");
    } 
    
    console.log(response);
    return await response.json();
}

function displayWeatherInfo(data) {

    // object destructuring
    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;

    console.log(data)
    card.textContent = "";
    card.style.display = "flex";
    
    // create html element
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const himidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    // add text to the html element
    cityDisplay.textContent = city;
    // temp is in Kelvin to °F ${((temp - 273.15) * (9 / 5) + 32).toFixed(1)}°F;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    himidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);
    
    // add class to the html element
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    himidityDisplay.classList.add("himidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");
    
    // append element to the card div
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(himidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {

    switch(true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧";
        case (weatherId >= 500 && weatherId < 600):
            return "🧺";
        case (weatherId >= 600 && weatherId < 700):
            return "❄";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫";
        case (weatherId === 800):
            return "🌞";
        case (weatherId >= 801 && weatherId < 810):
            return "☁";
        default:
            return "🥚"          
    }
}

function displayError(message) {

    console.error(`Error: ${message}`);

    const errorDisplay = document.createElement("p");

    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}