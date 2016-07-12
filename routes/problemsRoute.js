const express = require('express')
const creationService = require('../service/creationService')
const data = require('../data/data')

// Bootstrap express
var problemsAPI = express.Router()
data.configData()

// /////////////////////////GET ALL/////////////////////////////////
problemsAPI.get('/problems', function (req, res, next) {
  data.configData()
  creationService.getFormattedProblemsService()
  .then(function (users) {
    res.status(201)
    res.json(users)
  })
  .catch(function (err) {
    res.status(500)
    res.json(err)
  })
})

// ////////////////////////POST PROBLEMS///////////////////////////////
problemsAPI.post('/problems', function (req, res) {
  data.configData()
  creationService.postProblemsService(req.body)
  .then(function (users) {
    res.status(201)
    res.json(users)
  })
  .catch(function (err) {
    res.status(500)
    res.json(err)
  })
})

// ////////////////////////POST PROBLEMS///////////////////////////////
problemsAPI.delete('/problems/:problem_id', function (req, res) {
  data.configData()
  creationService.deleteProblemsService(req)
  .then(function (users) {
    res.status(202)
    res.json(users)
  })
  .catch(function (err) {
    res.status(500)
    res.json(err)
  })
})

module.exports = problemsAPI
