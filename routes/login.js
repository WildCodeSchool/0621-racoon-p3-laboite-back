const loginRouter = require('express').Router()
const Login = require('../models/login')
const { hashPassword, verifyPassword } = require('../helpers/crypte')
const { calculateToken, verifyToken } = require('../helpers/Jwt')

loginRouter.post('/addAdmin', (req, res) => {
  const { email, password } = req.body
  hashPassword(password)
    .then(hashedPassword => {
      Login.addAdmin(email, hashedPassword).then(resulst => {
        if (resulst) res.json({ email, hashedPassword })
      })
    })
    .catch(error => {
      res.status(500).json(error.response)
    })
})

loginRouter.post('/', (req, res) => {
  const { email, password } = req.body
  let validationErrors = null
  validationErrors = Login.validate(req.body)
  if (validationErrors)
    res.status(401).json({ auth: false, message: 'Invalid format credentials' })
  else {
    Login.findByEmail(email)
      .then(user => {
        if (!user)
          res.status(401).json({ auth: false, message: 'Invalid credentials' })
        else {
          verifyPassword(password, user.admin_password).then(
            passwordIsCorrect => {
              if (passwordIsCorrect) {
                const accessToken = calculateToken(email, user.id)
                res.header('Access-Control-Expose-Headers', 'x-access-token')
                res.set('x-access-token', accessToken)
                res.status(200).json({
                  auth: true,
                  accessToken: accessToken,
                  result: { id: user.id, email: user.user_email }
                })
              } else {
                res
                  .status(401)
                  .json({ auth: false, message: 'Invalid credentials' })
              }
            }
          )
        }
      })
      .catch(error => {
        res.status(500).json(error.response)
      })
  }
})

loginRouter.get('/isUserAuth', verifyToken, async (req, res) => {
  try {
    return res.status(200).json('Your Authenticated!')
  } catch (error) {
    return res.status(500).json({ auth: false, message: 'Wrong token' })
  }
})

module.exports = loginRouter
