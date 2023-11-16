const express = require('express')
const serveIndex = require('serve-index')

const app = express()
const port = process.env.PORT || 3000

app.use('/', express.static('public'), serveIndex('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
