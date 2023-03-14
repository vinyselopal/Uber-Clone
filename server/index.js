const express = require('express')
const { Server } = require('socket.io')
const { createServer } = require('http')
const { getNearestPendingRide } = require('./controllers/ridesController')
const { connect } = require('./configDB.js')
const app = express()
const httpServer = createServer(app)

const cors = require('cors')

connect()

const { ridesRouter } = require('./routers/ridesRouter')
const { usersRouter } = require('./routers/usersRouter')

app.use(cors({
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:5173']
  }
})

global.io = io

io.on('connection', (socket) => {
  socket.on('available', async (data) => {
    console.log('data', data)
    await getNearestPendingRide(data, socket)
  })
})

app.use(express.json())

app.use('/rides', ridesRouter)
app.use('/users', usersRouter)

module.exports = { httpServer, io }
