let weather = {
    apikey: "42c20fa63603d9742186561470b7bafb",
    fetchWeather: function(city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey).then((Response) => Response.json()).then((data) => this.displayWeather(data));
    },
    
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;

        console.log(name, icon, description, temp, humidity, speed);

        document.querySelector(".city").textContent = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").textContent = description;
        document.querySelector(".temp").textContent = temp + "°C";
        document.querySelector(".humidity").textContent = "Humidity: " + humidity+ "%";
        document.querySelector(".wind").textContent = "WInd speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
    }
}

document.querySelector(".search-btn").addEventListener("click", function() {
    let str = document.querySelector(".search-bar").value;
    weather.fetchWeather(str);
});


document.querySelector(".search-bar").addEventListener("keyup", function(e) {
    if(e.key == "Enter"){
        let str = document.querySelector(".search-bar").value;
    weather.fetchWeather(str);
    }
});


// When page is loading
weather.fetchWeather("Mysore");