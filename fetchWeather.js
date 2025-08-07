export async function fetchWeather(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            text.innerText = data.name;
            temperature.innerText = `${Math.round(data.main.temp)}°C`;
            description.innerText = data.weather[0].description;
            windSpeed.innerText = ` ${Math.round(data.wind.speed*3.6)} km/h`;
            humidity.innerText = ` ${data.main.humidity}%`;

            function check () {
            const weatherImg = document.querySelector('.weather-icon');
            if(data.weather[0].description === 'overcast clouds') {
            weatherImg.src = "./images/cloudy.png";
            } else if(data.weather[0].description === 'broken clouds' || data.weather[0].description === 'scattered clouds') {
            weatherImg.src = "./images/clouds.png";
            }
            else if(data.weather[0].main === 'Rain') {
            weatherImg.src = "./images/rainy.webp";
            }
            else if(data.weather[0].main === 'Clear') {
            weatherImg.src = "./images/clearsky.png";
            }
            else if(data.weather[0].main === 'Snow') {
            weatherImg.src = "./images/snow.png";
            }
            else {
            weatherImg.src = "./images/thunderstorm.png";
            }
            return;
            };
            check();
        })
      };