const loginRouter = require('express').Router()
const Login = require('../models/user')

loginRouter.post('/', (req, res) => {
  //
  console.log(req.body)
  res.status(200).send(req.body)
})

module.exports = loginRouter
