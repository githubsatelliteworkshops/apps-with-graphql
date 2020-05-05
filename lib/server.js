// External deps
const fs                    = require("fs")
const path                  = require("path")
const yaml                  = require('js-yaml')
const express               = require("express")
const { createWebhooksApi } = require('@octokit/webhooks')
const { createAppAuth }     = require("@octokit/auth-app");
const { graphql }           = require("@octokit/graphql");

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
  const auth = await createAppAuth({
    id: config.github_app_id,
    privateKey: privateKey,
    installationId: payload.installation.id
  });

  const graphqlWithAuth = graphql.defaults({
    request: {
      hook: auth.hook
    }
  });

  console.log(payload)
})


const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + listener.address().port)
})
