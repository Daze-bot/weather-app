import Weather from './Weather';

let currentLocation = localStorage.getItem('currentLocation') || 'philadelphia';
let weatherUnits = localStorage.getItem('weatherUnits') || 'f';

function searchLocation() {
  let search = document.querySelector('#searchbar').value;
  new Weather(search, weatherUnits).displayWeatherData();
  saveLocation(search);
  clearSearch();
}

function clearSearch() {
  let search = document.querySelector('#searchbar')
  search.value = "";
  search.focus();
}

function changeUnits() {
  let unitInput = document.querySelector('.unitType');
  if (unitInput.checked) {
    weatherUnits = 'f';
    document.querySelector('.unitC').style.color = 'white';
    document.querySelector('.unitF').style.color = 'black';
    document.querySelector('.unitC').style.transition = '.4s';
    document.querySelector('.unitF').style.transition = '.4s';
  } else {
    weatherUnits = 'c';
    document.querySelector('.unitF').style.color = 'white';
    document.querySelector('.unitC').style.color = 'black';
    document.querySelector('.unitC').style.transition = '.4s';
    document.querySelector('.unitF').style.transition = '.4s';
  }
  new Weather(window.localStorage.currentLocation, weatherUnits).displayWeatherData();
  saveUnits(weatherUnits);
}

function saveLocation(location) {
  window.localStorage.setItem('currentLocation', location);
}

function saveUnits(units) {
  window.localStorage.setItem('weatherUnits', units);
}

export {
  currentLocation,
  weatherUnits,
  clearSearch,
  searchLocation,
  changeUnits,
  saveLocation,
}