let submitBtn = document.querySelector('#submitBtn')
let citySearch = document.querySelector('#city')
let forecastDates = document.getElementsByClassName('.date')


let ApiKey= "f22f30f7481bd469e766e6715325c3ad"
let ApiURL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ApiKey}`

let geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=5&appid=${ApiKey}`

let formInnerHtml = `
<card id="Day1">
    <h3 class="date">Date goes here</h3>
    <p>Temperature: <span id="temp-forecast"></span></p>
    <p>Wind: <span id="wind-forecast"></span></p>
    <p>Humidity: <span id="humid-forecast"></span></p>
</card>
`
// function getCardTemplate(){
//     let days='';
//     for (let i=0; i< .length; i++){
        
//     }
// }

function init(){
    formContainerEl.formInnerHtml = formInnerHtml;
    submitBtn = document.querySelector('#submitBtn')
    citySearch = document.querySelector('#city')
    formEl = document.querySelector('#form')
    formEl.addEventListnener('submit', handleSearch)
}

//submit button
// Add search history to below search button

//Display current weather after search is complete
//Displays 5 Day forecast from search result


// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
