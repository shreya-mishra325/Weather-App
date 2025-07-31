const weatherImg = document.querySelector('.weather-icon');
if(data.weather[0].main === 'Thunderstorm') {
    weatherImg.src = "./images/thunderstrom.png";
} else if(data.weather[0].main === 'Rain') {
    weatherImg.src = "./images/rain.png";
}