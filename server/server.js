require('./config/config');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT

app.use(bodyParser.json());

app.get('/usuarios', function (req, res) {
  res.json('GET usuarios')
})
app.post('/usuarios', function (req, res) {
  res.json('POST usuarios')
})
app.put('/usuarios/:id', function (req, res) {
  res.json('PUT usuarios')
})
app.delete('/usuarios/:id', function (req, res) {
  res.json('DELETE usuarios')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})