const { getLocationsByUserModel, createRideByUserModel } = require('../models/usersModel')

const getLocationsByUser = (req, res, next) => {
  const userId = req.userId
  const locations = getLocationsByUserModel(userId)
}

module.exports = { getLocationsByUser }
