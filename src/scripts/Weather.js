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

  // Use this to make only 1 API call with DOM elements as params
  async displayWeatherData(displayObject) {
    let result = await this.getWeatherData();

    if (this.validCity === true) {
      displayObject.temp.textContent = `${result.main.temp} °${this.tempUnit}`;
      displayObject.low.textContent = `L: ${result.main.temp_min} °${this.tempUnit}`;
      displayObject.high.textContent = `H: ${result.main.temp_max} °${this.tempUnit}`;
      displayObject.feel.textContent = `${result.main.feels_like} °${this.tempUnit}`;
      displayObject.humid.textContent = `${result.main.humidity} %`;
      displayObject.wind.textContent = `${result.wind.speed} ${this.speedUnit}`;
      displayObject.city.textContent = result.name;

      while (displayObject.imgDiv.hasChildNodes()) {
        displayObject.imgDiv.removeChild(displayObject.imgDiv.lastChild);
      }
      let img = result.weather[0].icon;
      let weatherImg = document.createElement('img');
      weatherImg.src = `http://openweathermap.org/img/wn/${img}@2x.png`;
      displayObject.imgDiv.appendChild(weatherImg);

      let description = result.weather[0].main;
      if (description === 'Clouds') {
        displayObject.details.textContent = 'Cloudy';
      } else if (description === 'Thunderstorm') {
        displayObject.details.textContent = 'Thunderstorms';
      } else {
        displayObject.details.textContent = description;
      }

      document.body.style.backgroundImage = `url(${bgImages[`${description}.jpg`]})`;
    }
  }
}

export default Weather;
