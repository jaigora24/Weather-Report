document.addEventListener("DOMContentLoaded", function () {
    
    var cityInput = $("#city");
    var cityButton = $("#button");

    function loadWeather() {
        var cityName = cityInput.val();

        var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&appid=dbe98c6eabaf54fa682fbca51cdedf80';
        
         $.ajax({
            url: weatherUrl
        }).done(function (response) {
            console.log(response)
            showWeather(response);
            

        }).fail(function (error) {
            alert("Please Enter a valid place")
        })
     
    }
    
    function loadPhoto() {
        var cityName = cityInput.val();
        
$.ajax({
            url: imageUrl
        }).done(function (response) {
            console.log(response)
   
        }).fail(function (error) {
            console.log("Invalid")
        })
    }
       function showWeather(response) { 
        
         var firstDiv = $(".firstDiv h1");
        firstDiv.text(response.name)
        
        var weatherIcon = $(".weatherIcon");
        var todayBg = $(".todayBox");
        
        var secondDiv = $(".secondDiv").css("fontSize","30");
        
        secondDiv.text(Math.ceil(response.main.temp) + "°")
        var wind = $(".wind")
       wind.html("Wind Speed: " + response.wind.speed + " m/s")
        
        var press = $(".pressure")
       press.html("Pressure: " +  response.main.pressure + " hPa")
    }
        cityButton.on("click", loadWeather);
})
    
