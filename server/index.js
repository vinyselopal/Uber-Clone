const express = require('express')
const { Server } = require('socket.io')
const createServer = require('http')

const app = express()
const httpServer = createServer(app)

const { ridesRouter } = require('./routers/ridesRouter')
const { usersRouter } = require('./routers/usersRouter')

const io = new Server(httpServer)

global.io = io

io.on('connection', (socket) => {
    // drivers connect
    console.log('socket connected')
})

module.exports = { httpServer }