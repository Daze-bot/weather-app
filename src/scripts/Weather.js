import { bgImages } from './backgroundImgLoader';

class Weather {
  constructor(location, units = 'f') {
    this.location = location;
    if (units === 'c') {
      this.units = 'metric';
      this.tempUnit = 'C';
      this.speedUnit = 'km/h';
    } else {
      this.units = 'imperial';
      this.tempUnit = 'F';
      this.speedUnit = 'mph';
    }
  }

  // eslint-disable-next-line consistent-return
  async getWeatherData() {
    try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather'
      + `?q=${this.location}`
      + `&units=${this.units}`
      + '&APPID=59e393b0ab45a1585d147ab33d507f28');
      if (response.status === 404) {
        // eslint-disable-next-line no-throw-literal
        throw `${this.location} not found! Double check your spelling.`;
      }
      this.validCity = true;
      document.querySelector('.currentTemp').classList.remove('hidden');
      document.querySelector('.conditionDiv').classList.remove('hidden');
      document.querySelector('.secondaryInfo').classList.remove('hidden');
      const weatherData = await response.json();
      return weatherData;
    } catch (err) {
      document.querySelector('.location').textContent = err;
      document.querySelector('.currentTemp').classList.add('hidden');
      document.querySelector('.conditionDiv').classList.add('hidden');
      document.querySelector('.secondaryInfo').classList.add('hidden');
      this.validCity = false;
    }
  }

  // Use this to make only 1 API call
  async displayWeatherData() {
    const result = await this.getWeatherData();

    const temp = document.querySelector('.currentTemp');
    const low = document.querySelector('.lowTemp');
    const high = document.querySelector('.highTemp');
    const feel = document.querySelector('.feelsLikeTemp');
    const humid = document.querySelector('.humidity');
    const wind = document.querySelector('.windSpeed');
    const city = document.querySelector('.location');
    const imgDiv = document.querySelector('.conditionImg');
    const details = document.querySelector('.currentConditon');

    if (this.validCity === true) {
      temp.textContent = `${Math.round(result.main.temp)}`;
      low.textContent = `L: ${Math.round(result.main.temp_min)}°`;
      high.textContent = `H: ${Math.round(result.main.temp_max)}°`;
      feel.textContent = `${Math.round(result.main.feels_like)}°`;
      humid.textContent = `${result.main.humidity}%`;
      wind.textContent = `${Math.round(result.wind.speed)}${this.speedUnit}`;
      city.textContent = result.name;

      while (imgDiv.hasChildNodes()) {
        imgDiv.removeChild(imgDiv.lastChild);
      }
      const img = result.weather[0].icon;
      const weatherImg = document.createElement('img');
      weatherImg.src = `http://openweathermap.org/img/wn/${img}@2x.png`;
      imgDiv.appendChild(weatherImg);

      const description = result.weather[0].main;
      if (description === 'Clouds') {
        details.textContent = 'Cloudy';
      } else if (description === 'Thunderstorm') {
        details.textContent = 'Thunderstorms';
      } else {
        details.textContent = description;
      }

      document.body.style.backgroundImage = `url(${bgImages[`${description}.jpg`]})`;
    }
  }
}

export default Weather;
