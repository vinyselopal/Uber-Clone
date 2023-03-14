const { ObjectId } = require('mongodb')
const { rides } = require('../configDB')

const updateRideByDriverModel = async (rideID, driverID) => {
  const filter = {
    _id: new ObjectId(rideID)
  }

  const update = {
    $set: {
      driver_id: new ObjectId(driverID)
    }
  }

  const response = await rides.updateOne(filter, update)
  if (response.modifiedCount !== 1) return false
  return true
}

const getNearestPendingRideModel = async (newLocation) => {
  const pendingRides = await rides.find({
    'source.latlng': {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: newLocation
        }
      }
    }
  }).toArray()

  return pendingRides[0]
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

module.exports = { updateRideByDriverModel, createRideByUserModel, getNearestPendingRideModel }
