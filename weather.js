class Weather {
  constructor (city, state) {
    this.apiKey = '0458a23aa5af8769a2384b8d9d0e8d78'
    this.city = city
    this.state = state
  }

  // Fetch weather from API
  async getWeather () {
    const response = await window.fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${thsi.apiKey}`)

    const respData = await response.json()

    return respData
  }
}
