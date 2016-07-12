const express = require('express')
const existingProblemsService = require('../service/existingProblemsService')
const bodyParser = require('body-parser')// body parser module as called permits to parse what is in body
const data = require('../data/data')

var existingProblemsAPI = express.Router()

existingProblemsAPI.use(bodyParser.json())

// ///////////////////////////GET EXISTING PROBLEMS/////////////////////////////
existingProblemsAPI.get('/problemsTypes', function (req, res) {
  data.configData()
  existingProblemsService.getFormattedExistingProblemsService()
  .then(function (existingProblems) {
    res.json(existingProblems)
  })
  .catch(function (err) {
    res.status(500)
    res.json(err)
  })
})

// ////////////////////////POST EXISTING PROBLEMS///////////////////////////////
existingProblemsAPI.post('/problemsTypes', function (req, res) {
  data.configData()
  existingProblemsService.postExistingProblemsService(req.body)
  .then(function (existingProblems) {
    res.status(201)
    res.json(existingProblems)
  })
  .catch(function (err) {
    res.status(500)
    res.json(err)
  })
})

module.exports = existingProblemsAPI
