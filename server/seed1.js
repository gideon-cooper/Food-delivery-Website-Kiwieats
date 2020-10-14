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
    name: 'Roast Chicken',
    image:
      'https://www.maangchi.com/wp-content/uploads/2018/02/roasted-chicken-1.jpg',
    price: 10,
    description:
      'A freshly roasted chicken brushed with a herb butter sauce that will make your mouth water',
  }),
  new Food({
    name: 'Hot chips',
    image:
      'https://img.apmcdn.org/4b2716626c9ff3f6e5dfebe520eb592c33cf1e7b/uncropped/941f50-splendid-table-french-fries.jpg',
    price: 4,
    description: 'Hot chips served with tomato sauce.',
  }),
  new Food({
    name: 'Cheeseburger',
    image:
      'https://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785.jpg?fit=1000%2C665&ssl=1',
    price: 6,
    description:
      'Delicious beef burger served with lettuce, tomato, onion and pickles.',
  }),
  new Food({
    name: 'Grilled BLT',
    image:
      'https://www.spendwithpennies.com/wp-content/uploads/2020/01/Edited-BLT-Sandwiches-SWP-5-500x500.jpg',
    price: 6,
    description:
      'Delicious BLT sandwich served with a heaping of delicious mayo.',
  }),
  new Food({
    name: 'Pepperoni Pizza',
    image:
      'https://www.cooksifu.com/wp-content/uploads/2019/03/Pepperoni-pizza.jpg',
    price: 5,
    description: 'Pizza generously topped with slices of pepperoni.',
  }),
  new Food({
    name: 'Fish and chips',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Fish_and_chips_blackpool.jpg/1200px-Fish_and_chips_blackpool.jpg',
    price: 8,
    description: 'Hot chips served with two battered fish.',
  }),
  new Food({
    name: 'Meat pie',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Meat_pie.jpg',
    price: 4,
    description: 'Hot meat pie filled with 100% New Zealand beef.',
  }),
  new Food({
    name: 'Ramen',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/1200px-Shoyu_Ramen.jpg',
    price: 12,
    description: 'Hot ramen cooked in a pork based broth',
  }),
  new Food({
    name: 'Fried noodles',
    image:
      'https://i1.wp.com/eatwhattonight.com/wp-content/uploads/2016/10/Soy-Sauce-Noodles_2.jpg?fit=2144%2C1424&ssl=1',
    price: 11,
    description: 'Wok fried noodles.',
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
