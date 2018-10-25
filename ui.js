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
    this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`)
    this.pressure.textContent = `Pressure: ${weather.main.pressure} kPa`
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`
    this.wind.textContent = `Wind: ${Math.ceil(weather.wind.deg)}˚ Speed: ${Math.ceil(weather.wind.speed)} m/s`

    // Calculate hour of sunrise
    // TODO: Calculate local hour for the city
    // http://www.javascriptkit.com/dhtmltutors/local-time-google-time-zone-api.shtml
    // nice example get timezone by lon and lat and get timezone by Google timezone API
    const dateSunrise = new Date(weather.sys.sunrise * 1000)
    const hourSunrise = dateSunrise.getUTCHours()
    const minuteSunrise = dateSunrise.getUTCMinutes()

    // Calculate hour of sunset
    const dateSunset = new Date(weather.sys.sunset * 1000)
    const hourSunset = dateSunset.getUTCHours()
    const minuteSunset = dateSunset.getUTCMinutes()

    this.sunrise.textContent = `Sunrise UTC: ${hourSunrise} h ${minuteSunrise} min`
    this.sunset.textContent = `Sunset UTC: ${hourSunset} h ${minuteSunset} min`
  }
}
