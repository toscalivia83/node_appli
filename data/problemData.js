// REQUIRES
const mongoose = require('mongoose')
// PRIVATE VARS
const Schema = mongoose.Schema
const schemaProblemeUser = new Schema({
  user: String,
  numPosteDA: String,
  adresseIPSopra: String,
  typeProbleme: String,
  commentaire: String,
  duree: Number,
  date: { type: Number, default: (new Date()).getTime() }
})

const UserModel = mongoose.model('problemeUser', schemaProblemeUser)

// PUBLIC
exports.getAllProblems = function (columns) {
  var mongoFields = columns.join(' ')
  var promise = new Promise(function (resolve, reject) {
    UserModel.find({}, function (err, users) {
      if (err) {
        reject(err)
      }
      mongoose.connection.close()
      resolve(users)
    }).select(mongoFields)
  })
  return promise
}

exports.addProblem = function (problem) {
  var promise = new Promise(function (resolve, reject) {
    var post = new UserModel(problem)
    post.save(function (err, post) {
      if (err) { reject(err) }
      mongoose.connection.close()
      resolve(post)
    })
  })
  return promise
}

exports.deleteProblem = function (param) {
  var promise = new Promise(function (resolve, reject) {
    UserModel.findByIdAndRemove(param, function (err, user) {
      if (err) {
        reject(err)
        return
      }
      if (user === null) {
        reject(err)
        return
      }
      mongoose.connection.close()
      resolve(user)
    })
  })
  return promise
}
