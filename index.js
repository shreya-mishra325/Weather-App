const input = document.getElementById('dropdown');

const cityName = document.querySelector('.location');
const humidity = document.querySelector('.humid');
const windSpeed = document.querySelector('.wind');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const image = document.querySelector('.weather-icon');

const text = document.querySelector('.city-name');
const button = document.querySelector('button');

const API_KEY = '623878137ab28bb1f733637354e80ede';


function showData() {
 const val = input.value.toLowerCase();
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${API_KEY}&units=metric`;
  if(val){
    fetchWeather(url);
    function fetchWeather(url) {
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
            if(data.weather[0].main === 'Clouds') {
            weatherImg.src = "./images/cloudy.png";
            } else if(data.weather[0].main === 'Rain') {
            weatherImg.src = "./images/rainy.webp";
            }
            else if(data.weather[0].main === 'Clear') {
            weatherImg.src = "./images/clearsky.png";
            }else {
            weatherImg.src = "./images/thunderstrom.png";
            }
            return;
            };
            check();
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
      }
    }
};

button.addEventListener('click', (evt) => 
  { 
    evt.preventDefault();
    {if(input.value === '')
        text.innerText = 'Cuttack';
    else
      showData();
    }
  });

input.addEventListener('keypress', (evt) => {
if(evt.key === 'Enter') {
  evt.preventDefault();
  showData();
}
});
