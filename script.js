var city = "Christchurch";

$.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=65cfe151d8a5ba18c17484455765f8f2",
    function(data) {
        console.log(data);
        
        var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = Math.floor(data.main.temp);
        var weather = data.weather[0].main;
        
        $(".icon").attr("src", icon);
        $(".weather").append(weather);
        $(".temp").append(temp+"°F");
    }
);