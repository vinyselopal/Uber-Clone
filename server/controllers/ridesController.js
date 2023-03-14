const { updateRideByDriverModel, createRideByUserModel, getNearestPendingRideModel } = require('../models/ridesModel')
const { checkDriverAvailability, updateDriverStatusModel } = require('../models/driversModel')

const createRideByUser = async (req, res, next) => {
  const ride = req.body.ride
  const rideID = await createRideByUserModel(ride)
  console.log(rideID)
  res.json({ rideID })
}

const getNearestPendingRide = async (data, socket) => {
  const location = data.location
  const driverID = data.driverID

  const newLocation = location.map(a => parseInt(a, 10))
  const pendingRide = await getNearestPendingRideModel(newLocation)
  const driverAvailability = await checkDriverAvailability(driverID)

  if (pendingRide && driverAvailability) {
    const rideID = pendingRide._id
    await updateDriverStatusModel(driverID)
    await updateRideByDriverModel(rideID, driverID)
    socket.emit('allotRide', pendingRide)
  }
}

module.exports = { createRideByUser, getNearestPendingRide }
