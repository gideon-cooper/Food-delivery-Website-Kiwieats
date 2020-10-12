const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
})

module.exports = mongoose.model('Food', foodSchema)
