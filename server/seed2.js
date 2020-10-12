const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config({ path: path.join(__dirname, '.env') })

const User = require('./models/users')
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },

  () => {
    console.log('CONNECTED')
  }
)
const users = [
  new User({
    name: 'john',
    email: 'john@gmail.com',
    password: 'john',
  }),
]
let done1 = 0
for (let i = 0; i < users.length; i++) {
  users[i].save((err, res) => {
    done1++
    if ((done = users.length)) {
      exit()
    }
  })
}
function exit() {
  mongoose.disconnect()
}
