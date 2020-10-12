const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
require('dotenv').config({ path: path.join(__dirname, '.env') })
const cors = require('cors')
const kiwiRoutes = require('./routes/kiwi')
const authRoutes = require('./routes/auth')
const mongoose = require('mongoose')

const server = express()

server.use(express.json())
server.use(cors())

server.use('/api/v1/kiwi', kiwiRoutes)
server.use('/api/v1/', authRoutes)
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },

  () => {
    console.log('CONNECTED')
  }
)
server.listen(PORT, () => console.log('Server is running on ', PORT))
module.exports = server
