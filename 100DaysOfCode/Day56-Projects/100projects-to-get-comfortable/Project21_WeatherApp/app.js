// APIKEY is loaded from config.js (see config.example.js for setup)
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// now select the html elements search box, btn, update the container so we need 3
const searchBox = document.getElementById("city")
const searchbtn = document.querySelector(".searchbar button")
const wcontainer = document.querySelector(".weather")
const weatherIcon = document.querySelector(".weather-icon");

// weather icon mapping
const weatherMap = {
    Clouds: "img/clouds.png",
    Clear: "img/clear.png",
    Rain: "img/rain.png",
    Drizzle: "img/drizzle.png",
    Mist: "img/mist.png"
};

// function 
async function checkWeather(city) {
    // if user didnt enter  any city return nothing
    if (!city) return

    try {
        // response logic 
        const res = await fetch(URL + city + `&appid=${APIKEY}`)

        // if no response from api/ not found city, return not found
        if (!res.ok) {
            alert("City not found");
            wcontainer.style.display = "none";
            return;
        }
        else {
            // if found city update city,temp,humidity,wind. parse api
            let data = await res.json()

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

            // update weather icon based on condition
            weatherIcon.src = weatherMap[data.weather[0].main] || "img/default.png";

            // to show the info dynamically 
            wcontainer.style.display = "block";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


//add event listener
searchbtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})
searchBox.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        checkWeather(searchBox.value);
    }
});