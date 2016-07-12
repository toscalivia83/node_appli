const mongoose = require('mongoose')
var databaseConfig = require('../config/database_config')

const dbname = databaseConfig.dbname
const server = databaseConfig.server
const database = databaseConfig.database

const dbConnexionUrl = database + '://' + server + '/' + dbname

exports.configData = function () {
  var db = mongoose.connection

  db.once('open', function () {
    console.log('Well connected')
  })

  db.once('close', function () {
    console.log('Mongoose closed')
  })

  mongoose.connect(dbConnexionUrl, function (error) {
    console.log('connect callback')
    if (error) {
      console.log(error)
    }
  })
}
