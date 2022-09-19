import './css/style.css';
import initLoad from './scripts/initLoad';
import Weather from './scripts/Weather';

initLoad();

let location = 'ozark';

let currentWeather = new Weather(location, 'f');
currentWeather.displayWeatherData();