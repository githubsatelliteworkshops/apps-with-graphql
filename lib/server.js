// External deps
const fs                    = require("fs")
const path                  = require("path")
const yaml                  = require('js-yaml')
const express               = require("express")
const { createWebhooksApi } = require('@octokit/webhooks')

// Local deps
const smeeClient            = require(path.join(__dirname, 'smee.js'))

// Setup
const port       = 64897
const app        = express()
const privateKey = fs.readFileSync('gh-app.pem', 'utf8')
const config     = JSON.parse(fs.readFileSync('config.json', 'utf8'))

const smee = smeeClient(config.webproxy_url, port)
const events = smee.start()

const webhooks = new createWebhooksApi({ secret: "mysecret", path: "/webhooks" })
app.use(webhooks.middleware)

// App

webhooks.on(["issue_comment.created", "issues.opened", "pull_request.opened"], async (event) => {
  const { payload } = event
  console.log(payload)
})


const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + listener.address().port)
})
