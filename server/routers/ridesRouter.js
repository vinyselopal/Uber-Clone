const express = require('express')
const ridesRouter = express.Router()

const { createRideByUser } = require('../controllers/ridesController.js')

ridesRouter.post('/', createRideByUser)

module.exports = { ridesRouter }
