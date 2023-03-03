const express = require('express')
const usersRouter = express.Router()

const { getLocationsByUser } = require('../controllers/usersController.js')
usersRouter.get('/locations', getLocationsByUser)
module.exports = { usersRouter }
