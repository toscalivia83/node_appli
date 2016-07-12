const express = require('express')
const creationService = require('../service/creationService')
const bodyParser = require('body-parser') // body parser module as called permits to parse what is in body
const data = require('../data/data')
var json2csv = require('json2csv')
var generalConfig = require('../config/general_config')

// Bootstrap express
var createCSVAPI = express.Router()

createCSVAPI.use(bodyParser.json())

// /////////////////////////GET ALL/////////////////////////////////
createCSVAPI.get('/CSV', function (req, res, next) {
  data.configData()
  creationService.getFormattedProblemsService()
  .then(function (users) {
    json2csv({ data: users, fields: generalConfig.fields, del: ';' }, function (err, csv) {
      if (err) {
        res.json(err)
      }
      res.setHeader('Content-Type', 'text/csv')
      res.status(201)
      res.send(csv)
    })
    .catch(function (err) {
      res.status(500)
      res.json(err)
    })
  })
})

module.exports = createCSVAPI
