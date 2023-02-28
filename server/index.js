const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.serverPort

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))