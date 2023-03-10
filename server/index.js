const express = require('express')
const { Server } = require('socket.io')
const { createServer } = require('http')
const { getFirstPendingRide } = require('./models/ridesModel')
const { connect } = require('./configDB.js')
const app = express()
const httpServer = createServer(app)

const cors = require('cors')

connect()

const { ridesRouter } = require('./routers/ridesRouter')
const { usersRouter } = require('./routers/usersRouter')
const { getPendingRides } = require('./models/ridesModel')

const io = new Server(httpServer)
global.io = io

io.on('connection', (socket) => {
  socket.on('available', () => {
    const pendingRide = getFirstPendingRide(socket)
    if (pendingRide) socket.emit('allotRide', pendingRide)
  })
})

app.use(cors())
app.use(express.json())

app.use('/rides', ridesRouter)
app.use('/users', usersRouter)

module.exports = { httpServer }
