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
    var fahrenheit = ((parseInt((response.main.temp) - 273.15) * 9/5 + 32)).toFixed();
    console.log("temperature: " + fahrenheit);
    var humidity = response.main.humidity + "%";
    console.log("humidity: " + humidity);
    var wind = response.wind.speed;
    console.log("wind speed: " + wind);
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    console.log(year);
    console.log(month);
    console.log(day);
    callUVIndex(response.coord.lat, response.coord.lon);
})
}
function callUVIndex (lat, lon) {
  var queryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=f08e0e7293a9c130de4d782ff1db313d"
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response){
    console.log(response);
    var uv = response.value;
    console.log(uv);
  })
}