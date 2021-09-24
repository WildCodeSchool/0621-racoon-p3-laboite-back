const jwt = require('jsonwebtoken')

const calculateToken = (userEmail = '', user_id = '') => {
  console.log(process.env.PRIVATE_KEY)
  return jwt.sign(
    { userEmail: userEmail, user_id: user_id },
    process.env.PRIVATE_KEY
  )
}

const decodedToken = token => {
  return jwt.decode(token)
}

module.exports = { calculateToken, decodedToken }
