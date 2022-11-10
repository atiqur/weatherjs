class Storage {
  constructor() {
    this.latitude
    this.longitude
  }

  getLocationData() {
    if (localStorage.getItem("latitude") === null) {
      return
    } else {
      this.latitude = localStorage.getItem("latitude")
      this.longitude = localStorage.getItem("longitude")
      return {
        latitude: this.latitude,
        longitude: this.longitude,
      }
    }
  }

  setLocationData(lat, long) {
    localStorage.setItem("latitude", lat)
    localStorage.setItem("longitude", long)
  }
}
