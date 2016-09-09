var problemService = require('../service/problemtypeService')

module.exports = {

  typeUserIsValid: function (param) {
    if ((problemService.typeIsNull(param) && problemService.typeIsInferior(param)) === true) {
      return true
    }
    return false
  },

  typenumPosteDAIsValid: function (param) {
    if ((problemService.typeIsNull(param)) === true) {
      return true
    }
    return false
  },

  typeProblemeIsValid: function (param) {
    if ((problemService.typeIsNull(param)) === true) {
      return true
    }
    return false
  },

  typeCommentsIsValid: function (param) {
    if (problemService.typeIsNull(param) === true) {
      return true
    }
    return false
  },

  typeDurationIsValid: function (param) {
    if ((problemService.typeIsNull(param) && problemService.typeIsAboveZero(param) && problemService.typeShouldBeANumber(param)) === true) {
      return true
    }
    return false
  },

  typeAdressIsValid: function (param) {
    if ((problemService.typeIsNull(param) && problemService.typeMatchWithRegex(param)) === true) {
      return true
    }
    return false
  },

  typeDateIsValid: function (param) {
    if ((problemService.typeIsNull(param) && problemService.typeShouldBeANumber(param) && problemService.typeIsAboveZero(param)) === true) {
      return true
    }
    return false
  }
}
