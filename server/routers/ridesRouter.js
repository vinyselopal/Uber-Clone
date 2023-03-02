const express = require('express')
const ridesRouter = express.Router()

const { updateDriverByRide, createRideByUser } = require('../controllers/ridesController.js')
ridesRouter.put('/rides/:rideId/driver', updateDriverByRide)
ridesRouter.post('/rides', createRideByUser)

module.exports = { ridesRouter }