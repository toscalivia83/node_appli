// REQUIRES
const mongoose = require('mongoose')

// PRIVATE VARS
const Schema = mongoose.Schema

const schemaNumPosteDA = new Schema({
  numPosteDA: String
})

const NumPosteDAModel = mongoose.model('numPosteDAModel', schemaNumPosteDA)

// PUBLIC
exports.getPostesDA = function (column) {
  var promise = new Promise(function (resolve, reject) {
    NumPosteDAModel.find({}, function (err, numPosteDA) {
      if (err) {
        reject(err)
      }
      mongoose.connection.close()
      resolve(numPosteDA)
    }).select(column)
  })
  return promise
}

exports.addNumPostesDA = function (problem) {
  var promise = new Promise(function (resolve, reject) {
    var post = new NumPosteDAModel(problem)

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

exports.deletePosteDA = function (param) {
  var promise = new Promise(function (resolve, reject) {
    NumPosteDAModel.findByIdAndRemove(param, function (err, numPosteDA) {
      if (err) {
        reject(err)
        return
      }
      if (numPosteDA === null) {
        reject(err)
        return
      }
      mongoose.connection.close()
      resolve(numPosteDA)
    })
  })
  return promise
}
