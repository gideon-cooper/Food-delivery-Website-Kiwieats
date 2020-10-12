const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config({ path: path.join(__dirname, '.env') })
const Food = require('./models/food')

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },

  () => {
    console.log('CONNECTED')
  }
)
const foods = [
  new Food({
    name: 'chicken',
    image: 'LOL',
    price: 1,
    description: 'its chicken',
  }),
  new Food({
    name: 'bacon',
    image: 'asd',
    price: 2,
    description: 'its bacon',
  }),
]
let done = 0
for (let i = 0; i < foods.length; i++) {
  foods[i].save((err, res) => {
    done++
    if ((done = foods.length)) {
      exit()
    }
  })
}
function exit() {
  mongoose.disconnect()
}
