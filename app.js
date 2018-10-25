// Init Weather obj
const weather = new Weather('Moscow', 'ru')
// Init UI obj
const ui = new UI()

// Get the weather at DOM load
document.addEventListener('DOMContentLoaded', callGetWeather)

// weather.changeLocation('London', 'uk')

function callGetWeather () {
  weather.getWeather()
    .then(data => {
      ui.paint(data)
    })
    .catch(err => console.log(err))
}
