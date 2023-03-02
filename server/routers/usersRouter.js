const express = require('express')
const router = express.Router()

const { getLocationsByUser } = require('../controllers/usersController.js')
router.get('/users/locations', getLocationsByUser)
module.exports = { router }