const bodyParser = require('body-parser')
const express = require('express')
const User = require('../models/User')
const api = express.Router()

api.use(bodyParser.json())

api.get('/users', async (request, response) => {
  try {
    const users = await User.find({status: true})
    response.json(users)
  } catch (error) {
    console.log(error)
  }
})

api.post('/users', async (request, response) => {
  try {
    const user = await new User(request.body).save()
    response.json(user)
  } catch (error) {
    response.send(error)
  }
})

api.delete('/users/:id' , async (request, response) => {
  try {
    const user = await User.remove({_id: request.params.id})
    response.json(user)
  } catch (error) {
    response.send(error)
  }
})

api.get('/users/:id', async (request, response) => {
  try {
    const user = await User.findOne({_id: request.params.id})
    response.json(user)
  } catch (error) {
    response.send(error)
  }
})

api.put('/users/:id', async (request, response) => {
  try {
    const user = await User.findOne({_id: request.params.id})

    for (prop in request.body) {
      user[prop] = request.body[prop]
    }

    response.json(await user.save())
  } catch (error) {
    response.send(error)
  }
})

module.exports = api