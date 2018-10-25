class UI {
  constructor () {
    this.location = document.querySelector('#w-location')
    this.coord = document.querySelector('#w-coord')
    this.description = document.querySelector('#w-description')
    this.string = document.querySelector('#w-string')
    this.icon = document.querySelector('#w-icon')
    this.details = document.querySelector('#w-details')
    this.pressure = document.querySelector('#w-pressure')
    this.humidity = document.querySelector('#w-humidity')
    this.wind = document.querySelector('#w-wind')
    this.sunrise = document.querySelector('#w-sunrise')
    this.sunset = document.querySelector('#w-sunset')
  }

  paint (weather) {
    // console.log(this.location)
    this.location.textContent = `${weather.name}, ${weather.sys.country}`
    this.coord.textContent = `Lon: ${weather.coord.lon}, Lat: ${weather.coord.lat}`
    this.description.textContent = weather.weather[0].description
    this.string.textContent = `${Math.ceil(weather.main.temp)} ˚C`
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`)
    this.pressure.textContent = `Pressure: ${weather.main.pressure} kPa`
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`
    this.wind.textContent = `Wind: ${Math.ceil(weather.wind.deg)}˚ Speed: ${Math.ceil(weather.wind.speed)} m/s`
    this.sunrise.textContent = `Sunrise: ${weather.sys.sunrise}`
    this.sunset.textContent = `Sunset: ${weather.sys.sunset}`
  }
}
