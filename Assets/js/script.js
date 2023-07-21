let submitBtn = document.querySelector('#submitBtn');
let citySearch = document.querySelector('#city');


let ApiKey= "f22f30f7481bd469e766e6715325c3ad";
let ApiURL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ApiKey}`


let formInnerHtml = `

`
// function getCardTemplate(){
//     let days='';
//     for (let i=0; i< .length; i++){
        
//     }
// }

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
