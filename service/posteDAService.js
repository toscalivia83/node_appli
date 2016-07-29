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
            numPosteDA: posteDA.numPosteDA,
            id: posteDA.id
          }
          numPosteDAFormat[generalConfig.selectColumnNumPosteDA] = obj.numPosteDA
          numPosteDAFormat[generalConfig.selectColumnId] = obj.id
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

exports.deletePosteDAService = function (param) {
  var promise = new Promise(function (resolve, reject) {
    console.log(param.params)
    numPosteDAData.deletePosteDA(param.params.problem_id)
      .then(function (param) {
        resolve(param)
      })
      .catch(function (err) {
        reject(err)
      })
  })
  return promise
}

