// REQUIRES
const mongoose = require('mongoose')

// PRIVATE VARS
const Schema = mongoose.Schema

const schemaExistingProblems = new Schema({
  typeProbleme: String,
  duree: Number
})

const ExistingProblemsModel = mongoose.model('existingProblemsModel', schemaExistingProblems)

// PUBLIC
exports.getExistingProblems = function (column) {
  var columnJoin = column.join(' ')
  var promise = new Promise(function (resolve, reject) {
    ExistingProblemsModel.find({}, function (err, existingProblems) {
      if (err) {
        reject(err)
      }
      mongoose.connection.close()
      resolve(existingProblems)
    }).select(columnJoin)
  })
  return promise
}

exports.addExistingProblems = function (problem) {
  var promise = new Promise(function (resolve, reject) {
    var post = new ExistingProblemsModel(problem)

    post.save(function (err, post) {
      if (err) {
        reject(err)
      }
      mongoose.connection.close()
      resolve(post)
    })
  })
  return promise
}
