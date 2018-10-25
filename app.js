// Init Storage obj
const storage = new Storage()
// Get stored location from LS
const weatherLocation = storage.getLocationData()

// Init Weather obj
const weather = new Weather(weatherLocation.city, weatherLocation.country)
// Init UI obj
const ui = new UI()

// Get the weather at DOM load
document.addEventListener('DOMContentLoaded', callGetWeather)

// Change location event
document.querySelector('#w-change-btn').addEventListener('click', (e) => {
  const city = document.querySelector('#city').value
  const country = document.querySelector('#country').value

  // Change location call
  weather.changeLocation(city, country)

  // Store location in LS
  storage.setLocationData(city, country)

  // Get and display weather
  callGetWeather()

  // Close the modal by jQuery
  $('#locModal').modal('hide')
})

// weather.changeLocation('London', 'uk')
// weather.changeLocation('Montreal', 'ca')
// weather.changeLocation('Vancouver', 'ca')
// weather.changeLocation('Quebec', 'ca')
// weather.changeLocation('Rome', 'it')
// weather.changeLocation('Beijing', 'cn')
// weather.changeLocation('Melbourne', 'au')

function callGetWeather () {
  weather.getWeather()
    .then(data => {
      ui.paint(data)
    })
    .catch(err => console.log(err))
}
