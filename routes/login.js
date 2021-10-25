const loginRouter = require('express').Router()
const Login = require('../models/login')
const { hashPassword, verifyPassword } = require('../helpers/argon2')
const { calculateToken, verifyToken } = require('../helpers/Jwt')

//-------------------------------------------------------------------------

// Route temporaire pour crée un admin avec un password hasher
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

//-----------------------------------------------------------------------

// Route pour le LOGIN
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
                  user_id: user.id,
                  user_email: user.user_email
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

//-------------------------------------------------------------------------

// Route temporaire pour checker le JWT
loginRouter.get('/isUserAuth', verifyToken, async (req, res) => {
  try {
    return res.status(200).json('Your Authenticated!')
  } catch (error) {
    return res.status(500).json('Wrong token')
  }
})

module.exports = loginRouter
