// Init Weather obj
const weather = new Weather('Moscow', 'ru')
// Init UI obj
const ui = new UI()

// Get the weather at DOM load
document.addEventListener('DOMContentLoaded', callGetWeather)

// weather.changeLocation('London', 'uk')
weather.changeLocation('Montreal', 'ca')

function callGetWeather () {
  weather.getWeather()
    .then(data => {
      ui.paint(data)
    })
    .catch(err => console.log(err))
}
