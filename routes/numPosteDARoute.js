const express = require('express')
const posteDAService = require('../service/posteDAService')
const bodyParser = require('body-parser')// body parser module as called permits to parse what is in body
const data = require('../data/data')

var numPosteDAAPI = express.Router()

numPosteDAAPI.use(bodyParser.json())

// ///////////////////////////GET POSTES DA/////////////////////////////
numPosteDAAPI.get('/postesDA', function (req, res, next) {
  data.configData()
  posteDAService.getFormattedNumPosteDAService()
  .then(function (numPosteDA) {
    res.status(201)
    res.json(numPosteDA)
  })
  .catch(function (err) {
    res.status(500)
    res.json(err)
  })
})

// ////////////////////////POST POSTES DA//////////////////////////////
numPosteDAAPI.post('/postesDA', function (req, res) {
  data.configData()
  posteDAService.postPosteDAService(req.body)
  .then(function (numPosteDA) {
    res.status(201)
    res.json(numPosteDA)
  })
  .catch(function (err) {
    res.status(500)
    res.json(err)
  })
})

// ////////////////////////DELETE POSTES DA///////////////////////////////
numPosteDAAPI.delete('/postesDA/:problem_id', function (req, res) {
  data.configData()
  posteDAService.deletePosteDAService(req)
  .then(function (numPosteDA) {
    res.status(202)
    res.json(numPosteDA)
  })
  .catch(function (err) {
    res.status(500)
    res.json(err)
  })
})

module.exports = numPosteDAAPI
