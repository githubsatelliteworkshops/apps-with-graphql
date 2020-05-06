// External deps
const fs = require('fs')
const path = require('path')
const express = require('express')

// Local deps
const smeeClient = require(path.join(__dirname, 'smee.js'))

// Setup
const port = 64897
const app = express()
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

const smee = smeeClient(config.webproxy_url, port)
smee.start()

// App
app.use(express.json())
app.post('/webhooks', (req, res) => {
  console.log(req.body)
})

const listener = app.listen(port, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
