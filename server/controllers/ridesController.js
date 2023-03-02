const { updateDriverByRideModel, createRideByUserModel } = require('../models/ridesModel')

const updateDriverByRide = (req, res, next) => {
    const rideId = req.params.rideId
    updateDriverByRideModel(userId)
}

const createRideByUser = (req, res, next) => {
    const userId = req.userId
    const rideId = createRideByUserModel(userId)

    io.emit('searchDrivers')
}

module.exports = { updateDriverByRide, createRideByUser }