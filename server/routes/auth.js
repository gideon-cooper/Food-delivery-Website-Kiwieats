const express = require('express')
const router = express.Router()
const cors = require('cors')
const path = require('path')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: path.join(__dirname, '.env') })
const bcrypt = require('bcryptjs')
const User = require('../models/users')

router.post('/register', async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(req.body.password, salt)
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  })
  try {
    const savedUser = await user.save()
    res.send(savedUser)
  } catch {
    console.log(error)
  }
})
router.post('/login', cors(), async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
//   const validPassword = await bcrypt.compare(req.body.password, user.password)
//   if (!validPassword) {
//     return res.status(400).send('Invalid password')
//     console.log('INVALID')
//   }
  jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET, (err, token) => {
    if (err) throw err
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    })
  })
})
module.exports = router
