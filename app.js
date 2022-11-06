const weather = new Weather()
const ui = new UI()

document.addEventListener("DOMContentLoaded", getCurrentWeather)
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value
  weather
    .changeLoction(city)
    .then((result) => getCurrentWeather(result.coord.lat, result.coord.lon))
    .catch((err) => console.log(err))

  $("#locModal").modal("hide")
})

function getCurrentWeather(lat, long) {
  if (lat && long) {
    weather
      .getWeather(lat, long)
      .then((result) => {
        ui.paint(result)
        console.log(result)
      })
      .catch((err) => console.log(err))
  } else {
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
}
