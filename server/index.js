const express = require('express')
const { Server } = require('socket.io')
const app = express()
const io = new Server()

io.on('connection', (socket) => {
    // drivers connect
})
require('dotenv').config()
const PORT = process.env.httpPort
const SPORT = process.env.socketioPort

io.listen(SPORT)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))