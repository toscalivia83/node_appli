var problemData = require('../data/problemData')
var problemService = require('./problemService')
var generalConfig = require('../config/general_config')

exports.postProblemsService = function (body) {
  var promise = new Promise(function (resolve, reject) {
    var errorTable = []

    if (problemService.typeDurationIsValid(body.duree) === false) {
      errorTable.push({message: 'duree not valid'})
    }

    if (problemService.typeCommentsIsValid(body.commentaire) === false) {
      errorTable.push({message: 'commentaire not valid'})
    }

    if (problemService.typeAdressIsValid(body.adresseIPSopra) === false) {
      errorTable.push({message: 'adresseIPSopra not valid'})
    }

    if (problemService.typeProblemeIsValid(body.typeProbleme) === false) {
      errorTable.push({message: 'typeProbleme not valid'})
    }

    if (problemService.typenumPosteDAIsValid(body.numPosteDA) === false) {
      errorTable.push({message: 'numPosteDA not valid'})
    }

    if (problemService.typeUserIsValid(body.user) === false) {
      errorTable.push({message: 'user not valid'})
    }

    if (problemService.typeDateIsValid(body.date) === false) {
      errorTable.push({message: 'date not valid'})
    }

    if (errorTable.length > 0) {
      reject(errorTable)
      return
    }

    problemData.addProblem(body)
    .then(function (post) {
      resolve(post)
    })
    .catch(function (err) {
      reject(err)
    })
  })
  return promise
}

exports.getFormattedProblemsService = function () {
  var selectColumnsTable = generalConfig.fields
  var promise = new Promise(function (resolve, reject) {
    problemData.getAllProblems(selectColumnsTable)
      .then(function (problems) {
        var tableau = problems.map(function (obj) {
          var tableauFormat = {
            user: problems.user,
            numPosteDA: problems.numPosteDA,
            adresseIPSopra: problems.adresseIPSopra,
            typeProbleme: problems.typeProbleme,
            commentaire: problems.commentaire,
            duree: problems.duree,
            date: problems.date
          }

          tableauFormat[generalConfig.selectColumnUser] = obj.user
          tableauFormat[generalConfig.selectColumnNumPosteDA] = obj.numPosteDA
          tableauFormat[generalConfig.selectColumnAdresseIPSopra] = obj.adresseIPSopra
          tableauFormat[generalConfig.selectColumnTypeProblem] = obj.typeProbleme
          tableauFormat[generalConfig.selectColumnCommentaire] = obj.commentaire
          tableauFormat[generalConfig.selectColumnDuree] = obj.duree
          tableauFormat[generalConfig.selectColumnDate] = obj.date
          return tableauFormat
        })
        resolve(tableau)
      })
      .catch(function (err) {
        reject(err)
      })
  })
  return promise
}

exports.deleteProblemsService = function (param) {
  var promise = new Promise(function (resolve, reject) {
    problemData.deleteProblem(param.params.problem_id)
      .then(function (param) {
        resolve(param)
      })
      .catch(function (err) {
        reject(err)
      })
  })
  return promise
}
