const express = require('express')
const bodyParser = require('body-parser')// body parser module as called permits to parse what is in body

var port = 8080

// Bootstrap express
var app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Content-Disposition, Accept')
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS, Content-Disposition')
  res.header('Content-Disposition', 'attachment; filename="export.csv"')
  next()
})

app.use(bodyParser.json())

app.use(require('./routes/problemsRoute'))
app.use(require('./routes/numPosteDARoute'))
app.use(require('./routes/existingProblemsRoute'))
app.use(require('./routes/createCSVRoute'))

// Start the server
app.listen(port, function () {
  console.log('Server Launched on port : ' + port)
})
