module.exports = {

  typeIsNull: function (param) {
    if (param === null || param === undefined || param === '') {
      return false
    }
    return true
  },

  typeIsInferior: function (param) {
    if (param.length > 50) {
      return false
    }
    return true
  },

  typeIsAboveZero: function (param) {
    if (param < 0) {
      return false
    }
    return true
  },

  typeShouldBeANumber: function (param) {
    if (typeof (param) === 'number') {
      return true
    }
    return false
  },

  typeMatchWithRegex: function (param) {
    var regex = '^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$'
    if (param.match(regex)) {
      return true
    }
    return false
  }
}
