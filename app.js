const weather = new Weather()
const ui = new UI()

document.addEventListener("DOMContentLoaded", getCurrentWeather)

function getCurrentWeather() {
  navigator.geolocation.getCurrentPosition((position) => {
    latitude = position.coords.latitude
    longitude = position.coords.longitude

    weather
      .getWeather(latitude, longitude)
      .then((result) => {
        ui.paint(result)
        console.log(result)
      })
      .catch((err) => console.log(err))
  })
}
