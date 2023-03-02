const express = require('express')
const router = express.Router()

const { updateDriverByRide, createRideByUser } = require('../controllers/driversController.js')
router.put('/rides/:rideId/driver', updateDriverByRide)
router.post('/rides', createRideByUser)

module.exports = { router }