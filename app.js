const weather = new Weather()
const ui = new UI()
const storage = new Storage()

document.addEventListener("DOMContentLoaded", showCurrentWeather)
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value
  weather
    .changeLoction(city)
    .then((result) => {
      const latitude = result.coord.lat
      const longitude = result.coord.lon
      storage.setLocationData(latitude, longitude)
      showWeather(latitude, longitude)
    })
    .catch((err) => {
      ui.error("Location not found")
    })

  $("#locModal").modal("hide")
})

function showCurrentWeather() {
  if (storage.getLocationData()) {
    loadFromLocalStorage()
  } else {
    loadFromGeoLocation()
      .then((result) => {
        const latitude = result.coords.latitude
        const longitude = result.coords.longitude
        storage.setLocationData(latitude, longitude)
        showWeather(latitude, longitude)
      })
      .catch((err) => {
        ui.error(err.message)
      })
  }
}

function loadFromLocalStorage() {
  const pos = storage.getLocationData()
  showWeather(pos.latitude, pos.longitude)
}

function loadFromGeoLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
    })
  })
}

function showWeather(lat, lon) {
  weather
    .getWeather(lat, lon)
    .then((result) => ui.paint(result))
    .catch((err) => console.log(err))
}
