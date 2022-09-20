import Close from '../imgs/close.svg';
import Weather from './Weather';
import {
  clearSearch,
  searchLocation,
  changeUnits,
  saveLocation,
} from './displayControl';

const currentLocation = localStorage.getItem('currentLocation') || 'philadelphia';
const weatherUnits = localStorage.getItem('weatherUnits') || 'f';

async function initLoad() {
  document.body.appendChild(createHeader());
  document.body.appendChild(createMain());
  const start = new Weather(currentLocation, weatherUnits);
  await start.getWeatherData();
  if (start.validCity === true) {
    start.displayWeatherData();
  } else {
    new Weather('Philadelphia', weatherUnits).displayWeatherData();
    saveLocation('Philadelphia');
  }
}

function createHeader() {
  const header = document.createElement('header');

  const searchDiv = document.createElement('div');
  searchDiv.classList.add('search');

  const searchbar = document.createElement('input');
  searchbar.setAttribute('id', 'searchbar');
  searchbar.setAttribute('type', 'search');
  searchbar.setAttribute('name', 'searchbar');
  searchbar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchbar.blur();
      searchLocation();
    }
  });

  const searchClose = document.createElement('img');
  searchClose.classList.add('searchCancel');
  searchClose.src = `${Close}`;
  searchClose.alt = 'Cancel';
  searchClose.addEventListener('click', clearSearch);

  const unitChanger = document.createElement('label');
  unitChanger.classList.add('unitChanger');

  const unitF = document.createElement('p');
  unitF.classList.add('unitF');
  unitF.textContent = 'F';

  const unitC = document.createElement('p');
  unitC.classList.add('unitC');
  unitC.textContent = 'C';

  const unitInput = document.createElement('input');
  unitInput.type = 'checkbox';
  unitInput.classList.add('unitType');

  if (weatherUnits === 'f') {
    unitInput.checked = false;
    unitC.style.color = 'white';
    unitF.style.color = 'black';
  } else if (weatherUnits === 'c') {
    unitInput.checked = true;
    unitF.style.color = 'white';
    unitC.style.color = 'black';
  }

  const unitSpan = document.createElement('span');
  unitSpan.classList.add('slider');
  unitSpan.addEventListener('click', changeUnits);

  header.appendChild(searchDiv);
  searchDiv.appendChild(searchbar);
  searchDiv.appendChild(searchClose);
  header.appendChild(unitChanger);
  unitChanger.appendChild(unitF);
  unitChanger.appendChild(unitC);
  unitChanger.appendChild(unitInput);
  unitChanger.appendChild(unitSpan);

  return header;
}

function createMain() {
  const main = document.createElement('main');

  const mainInfo = document.createElement('div');
  mainInfo.classList.add('mainInfo');

  const cityDiv = document.createElement('div');
  cityDiv.classList.add('location');

  const currentTemp = document.createElement('div');
  currentTemp.classList.add('currentTemp');

  const conditionDiv = document.createElement('div');
  conditionDiv.classList.add('conditionDiv');

  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('currentConditon');

  const imgDiv = document.createElement('div');
  imgDiv.classList.add('conditionImg');

  main.appendChild(mainInfo);

  mainInfo.appendChild(cityDiv);
  mainInfo.appendChild(currentTemp);

  mainInfo.appendChild(conditionDiv);
  conditionDiv.appendChild(detailsDiv);
  conditionDiv.appendChild(imgDiv);

  const secondaryInfo = document.createElement('div');
  secondaryInfo.classList.add('secondaryInfo');

  const tempRange = document.createElement('div');
  tempRange.classList.add('tempRanges');

  const highTemp = document.createElement('div');
  highTemp.classList.add('highTemp');

  const lowTemp = document.createElement('div');
  lowTemp.classList.add('lowTemp');

  const feelsLike = document.createElement('div');
  feelsLike.classList.add('feelsLikeDiv');

  const feelsText = document.createElement('p');
  feelsText.classList.add('feelsLikeText');
  feelsText.textContent = 'Feels Like:';

  const feelsTemp = document.createElement('div');
  feelsTemp.classList.add('feelsLikeTemp');

  const humidDiv = document.createElement('div');
  humidDiv.classList.add('humidityDiv');

  const humidText = document.createElement('p');
  humidText.classList.add('humidityText');
  humidText.textContent = 'Humidity:';

  const humidity = document.createElement('div');
  humidity.classList.add('humidity');

  const windDiv = document.createElement('div');
  windDiv.classList.add('windDiv');

  const windText = document.createElement('p');
  windText.classList.add('windText');
  windText.textContent = 'Wind:';

  const windSpeed = document.createElement('div');
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
