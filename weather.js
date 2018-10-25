class Weather {
  constructor (city, country) {
    this.apiKey = '0458a23aa5af8769a2384b8d9d0e8d78'
    this.city = city
    this.country = country
    // TODO: add units to func options
    // this.units = units
  }

  // Fetch weather from API
  async getWeather () {
    // Fetch data
    // units=metric temp in celcius
    const response = await window.fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`)

    const respData = await response.json()

    return respData
  }

  // Change weather location
  changeLocation (city, country) {
    this.city = city
    this.country = country
  }
}
