import Weather from './Weather';

function searchLocation() {
  const search = document.querySelector('#searchbar').value;
  const weatherUnit = localStorage.getItem('weatherUnits') || 'f';
  new Weather(search, weatherUnit).displayWeatherData();
  saveLocation(search);
  clearSearch();
}

function changeUnits() {
  const unitInput = document.querySelector('.unitType');
  let currentUnit;
  if (unitInput.checked) {
    currentUnit = 'f';
    document.querySelector('.unitC').style.color = 'white';
    document.querySelector('.unitF').style.color = 'black';
    document.querySelector('.unitC').style.transition = '.4s';
    document.querySelector('.unitF').style.transition = '.4s';
  } else {
    currentUnit = 'c';
    document.querySelector('.unitF').style.color = 'white';
    document.querySelector('.unitC').style.color = 'black';
    document.querySelector('.unitC').style.transition = '.4s';
    document.querySelector('.unitF').style.transition = '.4s';
  }
  const cityLocation = localStorage.getItem('currentLocation') || 'philadelphia';
  new Weather(cityLocation, currentUnit).displayWeatherData();
  saveUnits(currentUnit);
}

function clearSearch() {
  const search = document.querySelector('#searchbar');
  search.value = '';
  search.focus();
}

function saveLocation(location) {
  window.localStorage.setItem('currentLocation', location);
}

function saveUnits(units) {
  window.localStorage.setItem('weatherUnits', units);
}

export {
  clearSearch,
  searchLocation,
  changeUnits,
  saveLocation,
};
