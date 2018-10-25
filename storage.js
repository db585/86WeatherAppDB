class Storage {
  constructor () {
    this.city = ''
    this.country = ''
    this.defaultCity = 'Montreal'
    this.defaultCountry = 'ca'
  }

  getLocationData () {
    if (window.localStorage.getItem('city') === null) {
      this.city = this.defaultCity
    } else {
      this.city = window.localStorage.getItem('city')
    }

    if (window.localStorage.getItem('country') === null) {
      this.country = this.defaultCountry
    } else {
      this.country = window.localStorage.getItem('country')
    }

    return {
      city: this.city,
      country: this.country
    }
  }

  setLocationData (city, country) {
    window.localStorage.setItem('city', city)
    window.localStorage.setItem('country', country)
  }
}
