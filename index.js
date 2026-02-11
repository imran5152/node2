const express = require('express')
const app = express()
const port = 10000

app.get('/', (req, res) => {
  res.send('Aarush Technologies | Codingwale Vaijapur | Node.js App Deployed Successfully | Version 2.0.0 🚀')
})

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})
