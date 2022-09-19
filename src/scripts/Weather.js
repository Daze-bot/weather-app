import { bgImages } from './backgroundImgLoader';

class Weather {
  constructor(location, units = 'f') {
    this.location = location;
    if (units === 'c') {
      this.units = 'metric';
      this.tempUnit = 'C';
      this.speedUnit = 'km/h';
    } else {
      this.units = 'imperial'
      this.tempUnit = 'F';
      this.speedUnit = 'mph';
    }
    this.validCity;
  }

  async getWeatherData() {
    try {
      let response = await fetch('https://api.openweathermap.org/data/2.5/weather' + 
      `?q=${this.location}` + 
      `&units=${this.units}` + 
      `&APPID=59e393b0ab45a1585d147ab33d507f28`);
      if (response.status === 404) {
        throw 'City not found!';
      }
      this.validCity = true
      let weatherData = await response.json();
      return weatherData;
    } catch (err) {
      alert(err);
      this.validCity = false;
    }
  }

  // Use this to make only 1 API call
  async displayWeatherData() {
    let result = await this.getWeatherData();

    let temp = document.querySelector('.currentTemp');
    let low = document.querySelector('.lowTemp');
    let high = document.querySelector('.highTemp');
    let feel = document.querySelector('.feelsLikeTemp');
    let humid = document.querySelector('.humidity');
    let wind = document.querySelector('.windSpeed');
    let city = document.querySelector('.location');
    let imgDiv = document.querySelector('.conditionImg');
    let details = document.querySelector('.currentConditon');

    if (this.validCity === true) {
      temp.textContent = `${Math.round(result.main.temp)}°`;
      low.textContent = `L: ${Math.round(result.main.temp_min)}°`;
      high.textContent = `H: ${Math.round(result.main.temp_max)}°`;
      feel.textContent = `${Math.round(result.main.feels_like)}°`;
      humid.textContent = `${result.main.humidity}%`;
      wind.textContent = `${Math.round(result.wind.speed)}${this.speedUnit}`;
      city.textContent = result.name;

      while (imgDiv.hasChildNodes()) {
        imgDiv.removeChild(imgDiv.lastChild);
      }
      let img = result.weather[0].icon;
      let weatherImg = document.createElement('img');
      weatherImg.src = `http://openweathermap.org/img/wn/${img}@2x.png`;
      imgDiv.appendChild(weatherImg);

      let description = result.weather[0].main;
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
