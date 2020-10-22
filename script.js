
var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + weatherSearch + "&appid={API key}";


$("#searchButton").on("click", function (event) {
    var weatherSearch = $("#weather-input").val();
    event.preventDefault();
    weatherSearch;
    console.log(weatherSearch);
})

function callWeather() {
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
})
}
callWeather();