const express = require('express')
const app = express()
require ('dotenv').config()

const protocol = process.env.PROTOCOL || "http"
const ip = require('ip').address()
const port = require = process.env.PORT || 3030

const routes = require('./routes');
app.use(routes)

app.listen(port, () => console.log(`
    Server iniciado em http://localhost:${port} or ${protocol}://${ip}:${port}
`));