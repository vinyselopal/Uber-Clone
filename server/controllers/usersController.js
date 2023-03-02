const { getLocationsByUser } = require('../models/usersModel')

const getLocationsByUser = (req, res, next) => {
    const userId = req.params.userId
    const locations = getLocationsByUserModel(userId)
}

module.exports = { getLocationsByUser }