$(document).ready(function(){

  function getCity(){
    var city = $("#city").val();
    $("#city").val("");
    return city;
  }

  function getWeather(){
    var url = "http://api.openweathermap.org/data/2.5/weather?q=";
    var api_key = "&units=imperial&&appid=1beca26b93421c07ef161fb32e6c38ce";

    $("form").submit(function(e){
      e.preventDefault();
      var city = getCity();
      $.get(url + city + api_key).done(function(data){
        var { name, main, weather } = data;
        var { temp } = main;
        var { description } = weather[0];
        displayWeather(name,temp,description)
      });
    });
  }

  function displayWeather(name,temp,description){
    $("#name").text(name);
    $("#temp").text(temp);
    $("#weather p").text(description);
    $("#weather").show();
  }

  getWeather();
});
