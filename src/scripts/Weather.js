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
      console.log(weatherData);
      return weatherData;
    } catch (err) {
      console.error(err);
      alert(err);
      this.validCity = false;
    }
  }

  // Use this to make only 1 API call with DOM elements as params
  async displayWeatherData(temp, low, high, feel, humid, wind, city, imgDiv, details) {
    let result = await this.getWeatherData();

    if (this.validCity === true) {
      temp.textContent = `${result.main.temp} °${this.tempUnit}`;
      low.textContent = `${result.main.temp_min} °${this.tempUnit}`;
      high.textContent = `${result.main.temp_max} °${this.tempUnit}`;
      feel.textContent = `${result.main.feels_like} °${this.tempUnit}`;
      humid.textContent = `${result.main.humidity} %`;
      wind.textContent = `${result.wind.speed} ${this.speedUnit}`;
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

      /* document.body.style.backgroundImage = `url(./imgs/weather-backgrounds/${description}.jpg)`; */

      console.log('valid city');
    }
  }
}

export default Weather;
