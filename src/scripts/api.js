class Weather {
  constructor(location, units) {
    this.location = location;
    if (units === 'c') {
      this.units = 'metric';
    } else if (units === 'f') {
      this.units = 'imperial';
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

  async getCurrentTemp() {
    let fullData = await this.getWeatherData();
    return fullData.main.temp;
  }
}

export default Weather;
