const { rides } = require('../configDB')

const updateDriverByRideModel = (rideId) => {

}

const createRideByUserModel = async (ride) => {
  console.log('ride', ride)
  const response = await rides.insertOne(ride)
  const rideID = response.insertedId
  console.log(rideID)
  return rideID
}

const getFirstPendingRide = () => {
  const pendingRides = []
  return pendingRides
}

module.exports = { updateDriverByRideModel, createRideByUserModel, getFirstPendingRide }
