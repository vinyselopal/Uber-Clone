const express = require('express')
const usersRouter = express.Router()

const { getLocationsByUser } = require('../controllers/usersController.js')
usersRouter.get('/users/locations', getLocationsByUser)
module.exports = { usersRouter }