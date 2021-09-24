const loginRouter = require('express').Router()
const Login = require('../models/login')
const { hashPassword, verifyPassword } = require('../helpers/crypte')
const { calculateToken } = require('../helpers/token')

loginRouter.post('/addAdmin', async (req, res) => {
  const { email, password } = req.body
  console.log(req.body)
  const hashedPassword = await hashPassword(password)
  const resulst = await Login.addAdmin(email, hashedPassword)
  if (resulst) res.json({ email, hashedPassword })
})

loginRouter.post('/', (req, res) => {
  const { email, password } = req.body
  Login.findByEmail(email).then(user => {
    if (!user) res.status(401).send('Invalid credentials')
    else {
      console.log('userWithHasPass', user)
      verifyPassword(password, user.admin_password).then(passwordIsCorrect => {
        console.log('passIsCorrect', passwordIsCorrect)
        if (passwordIsCorrect) {
          console.log('userId', user.id)
          const token = calculateToken(email, user.id)
          res.cookie('user_token', token)
          res.send(token)
        } else res.status(401).send('Invalid credentials')
      })
    }
  })
})

module.exports = loginRouter
