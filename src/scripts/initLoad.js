import Weather from './Weather';
import WeatherDisplayDivs from './WeatherDisplayDivs';

function initLoad() {
  let location = 'philadelphia';

  let cityDiv = document.createElement('div');
  cityDiv.classList.add('location');
  document.body.appendChild(cityDiv);

  let currentTemp = document.createElement('div');
  currentTemp.classList.add('currentTemp');
  document.body.appendChild(currentTemp);

  let conditionDiv = document.createElement('div');
  conditionDiv.classList.add('conditionDiv');

  let detailsDiv = document.createElement('div');
  detailsDiv.classList.add('currentConditon');

  let imgDiv = document.createElement('div');
  imgDiv.classList.add('conditionImg');

  conditionDiv.appendChild(detailsDiv);
  conditionDiv.appendChild(imgDiv);
  document.body.appendChild(conditionDiv);

  let tempRange = document.createElement('div');
  tempRange.classList.add('tempRanges');

  let highTemp = document.createElement('div');
  highTemp.classList.add('highTemp');

  let lowTemp = document.createElement('div');
  lowTemp.classList.add('lowTemp');

  tempRange.appendChild(highTemp);
  tempRange.appendChild(lowTemp);
  document.body.appendChild(tempRange);

  let feelsLike = document.createElement('div');
  feelsLike.classList.add('feelsLikeDiv');

  let feelsText = document.createElement('p');
  feelsText.classList.add('feelsLikeText');
  feelsText.textContent = 'Feels Like:';

  let feelsTemp = document.createElement('div');
  feelsTemp.classList.add('feelsLikeTemp');

  feelsLike.appendChild(feelsText);
  feelsLike.appendChild(feelsTemp);
  document.body.appendChild(feelsLike);

  let humidDiv = document.createElement('div');
  humidDiv.classList.add('humidityDiv');

  let humidText = document.createElement('p');
  humidText.classList.add('humidityText');
  humidText.textContent = 'Humidity:';

  let humidity = document.createElement('div');
  humidity.classList.add('humidity');

  humidDiv.appendChild(humidText);
  humidDiv.appendChild(humidity);
  document.body.appendChild(humidDiv);

  let windDiv = document.createElement('div');
  windDiv.classList.add('windDiv');

  let windText = document.createElement('p');
  windText.classList.add('windText');
  windText.textContent = 'Wind:';

  let windSpeed = document.createElement('div');
  windSpeed.classList.add('windSpeed');

  windDiv.appendChild(windText);
  windDiv.appendChild(windSpeed);
  document.body.appendChild(windDiv);

  let weatherDisplays = new WeatherDisplayDivs(currentTemp, lowTemp, highTemp, feelsTemp, humidity, windSpeed, cityDiv, imgDiv, detailsDiv)

  let currentWeather = new Weather(location, 'f');

  currentWeather.displayWeatherData(weatherDisplays);
}

export default initLoad;