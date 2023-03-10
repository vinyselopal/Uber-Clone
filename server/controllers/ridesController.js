const { updateDriverByRideModel, createRideByUserModel } = require('../models/ridesModel')

const updateDriverByRide = (req, res, next) => {
  const rideId = req.params.rideId
  updateDriverByRideModel(userId)
}

const createRideByUser = async (req, res, next) => {
  console.log('rides post', req.body)
  const ride = req.body.ride
  const rideID = await createRideByUserModel(ride)
  console.log(rideID)
  res.json({ rideID })
}

module.exports = { updateDriverByRide, createRideByUser }
