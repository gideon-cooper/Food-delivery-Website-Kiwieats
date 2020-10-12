const express = require('express')
const router = express.Router()
const cors = require('cors')
const Food = require('../models/food')

router.get('/', cors(), (req, res) => {
  console.log('HEY')
  Food.find()
    .exec()
    .then((food) => {
      console.log('foods', food)
      res.status(200).json(food)
    })
    .catch((err) => {
      console.log('error', err)
      res.status(500).json({
        error: err,
      })
    })
})
module.exports = router
