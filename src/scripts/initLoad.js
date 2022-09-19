import Close from '../imgs/close.svg';
import Weather from './Weather';

function initLoad() {
  document.body.appendChild(createHeader());
  document.body.appendChild(createMain());
  new Weather('philadelphia', 'f').displayWeatherData();
}

function createHeader() {
  let header = document.createElement('header');

  let searchDiv = document.createElement('div');
  searchDiv.classList.add('search');

  let searchbar = document.createElement('input');
  searchbar.setAttribute('id', 'searchbar');
  searchbar.setAttribute('type', 'search');
  searchbar.setAttribute('name', 'searchbar');

  let searchClose = document.createElement('img');
  searchClose.classList.add('searchCancel');
  searchClose.src = `${Close}`;
  searchClose.alt = 'Cancel';

  header.appendChild(searchDiv);
  searchDiv.appendChild(searchbar);
  searchDiv.appendChild(searchClose);

  return header;
}

function createMain() {
  let main = document.createElement('main');

  let mainInfo = document.createElement('div');
  mainInfo.classList.add('mainInfo');

  let cityDiv = document.createElement('div');
  cityDiv.classList.add('location');

  let currentTemp = document.createElement('div');
  currentTemp.classList.add('currentTemp');

  let conditionDiv = document.createElement('div');
  conditionDiv.classList.add('conditionDiv');

  let detailsDiv = document.createElement('div');
  detailsDiv.classList.add('currentConditon');

  let imgDiv = document.createElement('div');
  imgDiv.classList.add('conditionImg');

  main.appendChild(mainInfo);

  mainInfo.appendChild(cityDiv);
  mainInfo.appendChild(currentTemp);

  mainInfo.appendChild(conditionDiv);
  conditionDiv.appendChild(detailsDiv);
  conditionDiv.appendChild(imgDiv);

  let secondaryInfo = document.createElement('div');
  secondaryInfo.classList.add('secondaryInfo');

  let tempRange = document.createElement('div');
  tempRange.classList.add('tempRanges');

  let highTemp = document.createElement('div');
  highTemp.classList.add('highTemp');

  let lowTemp = document.createElement('div');
  lowTemp.classList.add('lowTemp');

  let feelsLike = document.createElement('div');
  feelsLike.classList.add('feelsLikeDiv');

  let feelsText = document.createElement('p');
  feelsText.classList.add('feelsLikeText');
  feelsText.textContent = 'Feels Like:';

  let feelsTemp = document.createElement('div');
  feelsTemp.classList.add('feelsLikeTemp');

  let humidDiv = document.createElement('div');
  humidDiv.classList.add('humidityDiv');

  let humidText = document.createElement('p');
  humidText.classList.add('humidityText');
  humidText.textContent = 'Humidity:';

  let humidity = document.createElement('div');
  humidity.classList.add('humidity');

  let windDiv = document.createElement('div');
  windDiv.classList.add('windDiv');

  let windText = document.createElement('p');
  windText.classList.add('windText');
  windText.textContent = 'Wind:';

  let windSpeed = document.createElement('div');
  windSpeed.classList.add('windSpeed');

  main.appendChild(secondaryInfo);

  secondaryInfo.appendChild(tempRange);
  tempRange.appendChild(highTemp);
  tempRange.appendChild(lowTemp);

  secondaryInfo.appendChild(feelsLike);
  feelsLike.appendChild(feelsText);
  feelsLike.appendChild(feelsTemp);

  secondaryInfo.appendChild(humidDiv);
  humidDiv.appendChild(humidText);
  humidDiv.appendChild(humidity);

  secondaryInfo.appendChild(windDiv);
  windDiv.appendChild(windText);
  windDiv.appendChild(windSpeed);

  return main;
}

export default initLoad;