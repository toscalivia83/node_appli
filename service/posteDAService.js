var numPosteDAData = require('../data/numPosteDAData')
var problemService = require('./problemService')
var generalConfig = require('../config/general_config')

exports.postPosteDAService = function (body) {
  var promise = new Promise(function (resolve, reject) {
    if (problemService.typenumPosteDAIsValid(body.numPosteDA) === false) {
      reject({message: 'numPosteDA not valid'})
      return
    }

    numPosteDAData.addNumPostesDA(body)
    .then(function (numPosteDA) {
      resolve(numPosteDA)
    })
    .catch(function (err) {
      reject(err)
    })
  })
  return promise
}

exports.getFormattedNumPosteDAService = function () {
  var selectColumn = generalConfig.selectColumnNumPosteDA
  var promise = new Promise(function (resolve, reject) {
    numPosteDAData.getPostesDA(selectColumn)
      .then(function (posteDA) {
        var tableau = posteDA.map(function (obj) {
          var numPosteDAFormat = {
            numPosteDA: posteDA.numPosteDA
          }
          numPosteDAFormat[generalConfig.selectColumnNumPosteDA] = obj.numPosteDA
          return numPosteDAFormat
        })
        resolve(tableau)
      })
      .catch(function (err) {
        reject(err)
      })
  })
  return promise
}
