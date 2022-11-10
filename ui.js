class UI {
  constructor() {
    this.location = document.getElementById("w-location")
    this.description = document.getElementById("w-desc")
    this.string = document.getElementById("w-string")
    this.icon = document.getElementById("w-icon")
    this.humidity = document.getElementById("w-humidity")
    this.feelsLike = document.getElementById("w-feels-like")
    this.wind = document.getElementById("w-wind")
  }

  paint(weather) {
    this.location.textContent = weather.name
    this.description.textContent = weather.weather[0].main
    this.string.textContent = weather.main.temp + " °C"
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    )
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} °C`
    this.wind.textContent = `Wind: ${weather.wind.speed}`
  }

  // TODO Display better error message
  error(message) {
    this.location.textContent = message
    this.description.textContent = ""
    this.string.style.display = "none"
    this.icon.setAttribute("src", "")
    this.humidity.style.display = "none"
    this.feelsLike.style.display = "none"
    this.wind.style.display = "none"
  }
}
