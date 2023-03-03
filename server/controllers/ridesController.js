const { updateDriverByRideModel, createRideByUserModel } = require('../models/ridesModel')

const updateDriverByRide = (req, res, next) => {
  const rideId = req.params.rideId
  updateDriverByRideModel(userId)
}

const createRideByUser = (req, res, next) => {
  console.log('rides post', req.body)
  const userId = req.userId
  const rideId = createRideByUserModel(userId)
}

module.exports = { updateDriverByRide, createRideByUser }
