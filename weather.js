class Weather {
  constructor() {
    this.api_key = "cf7af79ed53535ffadd113f236c0bfff"
  }

  async getWeather(latitude, longitude) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.api_key}&units=metric`
    )
    const responseData = await response.json()
    return responseData
  }

  async changeLoction(city) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.api_key}`
    )
    const responseData = await response.json()
    return responseData
  }
}
