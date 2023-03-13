const { rides } = require('../configDB')

const updateDriverByRideModel = (rideId) => {

}

const createRideByUserModel = async (ride) => {
  const { source, destination } = ride
  const newRide = {
    ...ride,
    source: { ...source, type: 'Point' },
    destination: { ...destination, type: 'Point' }
  }
  const response = await rides.insertOne(newRide)
  const rideID = response.insertedId
  return rideID
}

const getNearestPendingRide = async (location) => {
  const pendingRides = await rides.find({
    "source.latlng": {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: location
        },
      }
    }
  }).toArray()

  return pendingRides[0]
}

(async () => await getNearestPendingRide([12, 77]))()
module.exports = { updateDriverByRideModel, createRideByUserModel, getNearestPendingRide }
