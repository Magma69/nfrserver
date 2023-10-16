const express = require('express')
const app = express()

app.post('/', (req, res) => {
  return res.status(200).send("Hello world!");
})

