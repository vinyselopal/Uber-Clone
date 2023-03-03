const express = require('express')
const { Server } = require('socket.io')
const { createServer } = require('http')
const { getFirstPendingRide } = require('./models/ridesModel')
const app = express()
const httpServer = createServer(app)
const cors = require('cors')
const { ridesRouter } = require('./routers/ridesRouter')
const { usersRouter } = require('./routers/usersRouter')
const { getPendingRides } = require('./models/ridesModel')
const bodyParser = require('body-parser')
const io = new Server(httpServer)

global.io = io

io.on('connection', (socket) => {
  console.log('socket connected')
  socket.on('available', () => {
    // get the first pending ride and allot
    const pendingRide = getFirstPendingRide()
    if (pendingRide) socket.emit('allotRide', pendingRide)
  })
})

app.use(bodyParser.urlencoded())
app.use(cors())
app.use(express.json())

app.use('/rides', ridesRouter)
app.use('/users', usersRouter)

module.exports = { httpServer }
