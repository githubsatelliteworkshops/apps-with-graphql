// External dependencies
const fs = require("fs")
const path = require("path")
const express = require("express")
const { createWebhooksApi } = require("@octokit/webhooks")

// Local dependencies
const smeeClient = require(path.join(__dirname, "smee.js"))

// Setup
const port = 64897
const app = express()
const config = JSON.parse(fs.readFileSync("config.json", "utf8"))

const smee = smeeClient(config.webproxy_url, port)
smee.start()

const webhooks = new createWebhooksApi({ secret: "mysecret", path: "/webhooks" })
app.use(webhooks.middleware)

// App
webhooks.on(["issue_comment.created", "issues.opened", "pull_request.opened"], async (event) => {
  const { payload } = event
  console.log(payload)
})

webhooks.on("error", (error) => {
  console.log(`Error occured in "${error.event.name} handler: ${error.stack}"`)
})

const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + listener.address().port)
})
