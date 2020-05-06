const SmeeClient = require("smee-client")

function smeeClient (webproxyUrl, port) {
  return new SmeeClient({
    source: webproxyUrl,
    target: `http://localhost:${port}/webhooks`,
    logger: console
  })
}

module.exports = smeeClient
