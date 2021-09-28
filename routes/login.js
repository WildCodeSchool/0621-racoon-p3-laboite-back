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
  let validationErrors = null
  validationErrors = Login.validate(req.body)
  if (validationErrors) res.status(401).send('Invalid format credentials')
  else {
    Login.findByEmail(email).then(user => {
      if (!user) res.status(401).send('Invalid credentials')
      else {
        verifyPassword(password, user.admin_password).then(
          passwordIsCorrect => {
            if (passwordIsCorrect) {
              const token = calculateToken(email, user.id)
              res.header('Access-Control-Expose-Headers', 'x-access-token')
              res.set('x-access-token', token)
              res.status(200).send('User connected !')
            } else {
              res.status(401).send('Invalid credentials')
            }
          }
        )
      }
    })
  }
})

module.exports = loginRouter
