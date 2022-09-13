import './css/style.css';
import Weather from './scripts/api';

let currentWeather = new Weather('Philadelphia', 'f');

currentWeather.getWeatherData();