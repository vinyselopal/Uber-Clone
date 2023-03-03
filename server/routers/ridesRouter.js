const express = require('express')
const ridesRouter = express.Router()

const { updateDriverByRide, createRideByUser } = require('../controllers/ridesController.js')

ridesRouter.put('/:rideId/driver', updateDriverByRide)
ridesRouter.post('/', createRideByUser)

module.exports = { ridesRouter }
