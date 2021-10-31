function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "fb943a4a65eff8aeef06ffcd0d6724e7";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child span");
            const city = document.querySelector("#weather span:last-child span");
            const icon = document.querySelector("#weather-icon");
            weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}°C`;

            if(data.weather[0].main === "Clouds"){
                icon.classList.add("fas");
                icon.classList.add("fa-cloud");
            }
            else if(data.weather[0].main === "Clear"){
                icon.classList.add("fas");
                icon.classList.add("fa-sun");
            }
            else if(data.weather[0].main === "Rain"){
                icon.classList.add("fas");
                icon.classList.add("fa-cloud-showers-heavy");
            }
            else if(data.weather[0].main === "Snow"){
                icon.classList.add("far");
                icon.classList.add("fa-snowflake");
            }
            else if(data.weather[0].main === "Thunderstorm"){
                icon.classList.add("fas");
                icon.classList.add("fa-bolt");
            }
            else if(data.weather[0].main === "Mist"){
                icon.classList.add("fas");
                icon.classList.add("fa-smog");
            }

            city.innerText = data.name;
            const tag = document.querySelector("#weather");
            tag.classList.remove("hidden");
        });
}

function onGeoError(){
    alert("Can't find user location!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);