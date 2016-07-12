var existingProblemData = require('../data/existingProblemData')
var problemService = require('./problemService')
var generalConfig = require('../config/general_config')

exports.postExistingProblemsService = function (body) {
  var promise = new Promise(function (resolve, reject) {
    var errorTable = []

    if (problemService.typeProblemeIsValid(body.typeProbleme) === false) {
      errorTable.push({message: 'typeProbleme not valid'})
    }

    if (problemService.typeDurationIsValid(body.duree) === false) {
      errorTable.push({message: 'duree not valid'})
    }

    if (errorTable.length > 0) {
      reject(errorTable)
      return
    }

    existingProblemData.addExistingProblems(body)
      .then(function (existingProblems) {
        resolve(existingProblems)
      })
      .catch(function (err) {
        reject(err)
      })
  })
  return promise
}

exports.getFormattedExistingProblemsService = function () {
  var selectColumnsForTypeProblem = generalConfig.selectColumnsForTypeProblem
  var promise = new Promise(function (resolve, reject) {
    existingProblemData.getExistingProblems(selectColumnsForTypeProblem)
    .then(function (existingProblems) {
      var tableau = existingProblems.map(function (obj) {
        var existingProblemsFormat = {
          typeProbleme: existingProblems.typeProbleme,
          duree: existingProblems.duree
        }
        existingProblemsFormat[generalConfig.selectColumnTypeProblem] = obj.typeProbleme
        existingProblemsFormat[generalConfig.selectColumnDuree] = obj.duree
        return existingProblemsFormat
      })
      resolve(tableau)
    })
    .catch(function (err) {
      reject(err)
    })
  })
  return promise
}
