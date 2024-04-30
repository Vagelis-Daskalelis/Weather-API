$(document).ready(function(){
    $("#form-submit").submit(function(event){
        performanceSearch(event)
    });
});

function performanceSearch(event) {
    var request;
    event.preventDefault();

    request = $.ajax({
        url:'https://api.openweathermap.org/data/2.5/weather',
        type: "GET",
        data:{
            q: $("#city").val(),
            appid: 'c038e5801fb5f266f4ebb9ccba1a3a51',
            units: 'metric'
        }
    });
    request.done(function(response){
        formatSearch(response);
    });
}


function formatSearch(jsonObject){
    var city_name = jsonObject.name;
    var city_weather = jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp;

    $('#city_name').text(city_name);
    $('#city_weather').text(city_weather);
    $('#city_temp').text(city_temp + "celsius");
}