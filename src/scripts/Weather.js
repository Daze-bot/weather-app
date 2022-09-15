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
  }

  async getWeatherData() {
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=${this.units}&APPID=59e393b0ab45a1585d147ab33d507f28`);
      let weatherData = await response.json();
      return weatherData;
    } catch (error) {
      console.error(error);
    }
  }

  // Use this to make only 1 API call
  async displayWeatherData(temp, low, high, feel, humid, wind, city, icon, details) {
    let result = await this.getWeatherData();
    temp.textContent = `${result.main.temp} °${this.tempUnit}`;
    low.textContent = `${result.main.temp_min} °${this.tempUnit}`;
    high.textContent = `${result.main.temp_max} °${this.tempUnit}`;
    feel.textContent = `${result.main.feels_like} °${this.tempUnit}`;
    humid.textContent = `${result.main.humidity} %`;
    wind.textContent = `${result.wind.speed} ${this.speedUnit}`;
    city.textContent = result.name;

    let img = result.weather[0].icon;
    let weatherImg = document.createElement('img');
    weatherImg.src = `http://openweathermap.org/img/wn/${img}@2x.png`;
    icon.appendChild(weatherImg);

    details.textContent = result.weather[0].main;
  }
}

export default Weather;
