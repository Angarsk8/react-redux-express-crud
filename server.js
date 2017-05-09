const mongoose = require('mongoose')
const express = require('express')
const api = require('./api')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/users')

const app = express()
const port = process.env.PORT || 8080
const public_path = express.static(`${__dirname}/public`)
const index_path = `${__dirname}/public/index.html`

app.use(public_path)
app.use('/api', api)

app.get('*', (request, response) => {
  response.sendFile(index_path, error => {
    if (error) {
      console.log(error)
    }
  })
})

app.listen(port)
console.log(`Server running on port ${port}`)