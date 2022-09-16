import './css/style.css';
import Weather from './scripts/Weather';

let currentWeather;

let invalidBtn = document.createElement('button');
invalidBtn.textContent = 'click me for invalid city';

let validBtn = document.createElement('button');
validBtn.textContent = 'click me for London';

document.body.appendChild(invalidBtn);
document.body.appendChild(validBtn);

let tempDiv = document.createElement('div');
document.body.appendChild(tempDiv);

let lowDiv = document.createElement('div');
document.body.appendChild(lowDiv);

let highDiv = document.createElement('div');
document.body.appendChild(highDiv);

let feelDiv = document.createElement('div');
document.body.appendChild(feelDiv);

let humidDiv = document.createElement('div');
document.body.appendChild(humidDiv);

let windDiv = document.createElement('div');
document.body.appendChild(windDiv);

let cityDiv = document.createElement('div');
document.body.appendChild(cityDiv);

let imgDiv = document.createElement('div');
document.body.appendChild(imgDiv);

let detailsDiv = document.createElement('div');
document.body.appendChild(detailsDiv);

invalidBtn.addEventListener('click', () => {
  currentWeather = new Weather('jevon');
  currentWeather.displayWeatherData(tempDiv, lowDiv, highDiv, feelDiv, humidDiv, windDiv, cityDiv, imgDiv, detailsDiv);
})

validBtn.addEventListener('click', () => {
  currentWeather = new Weather('Philadelphia');
  currentWeather.displayWeatherData(tempDiv, lowDiv, highDiv, feelDiv, humidDiv, windDiv, cityDiv, imgDiv, detailsDiv);
})