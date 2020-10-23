var weatherSearch = "";
$("#searchButton").on("click", function () {
  weatherSearch = $("#weather-input").val().trim();
  console.log(weatherSearch);
  callWeather();
})

function callWeather() {
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + weatherSearch + "&appid=f08e0e7293a9c130de4d782ff1db313d";
  $.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
})
}