const jwt = require('jsonwebtoken')

// Crée un JWT
const calculateToken = (userEmail = '', user_id = '') => {
  return jwt.sign(
    { userEmail: userEmail, user_id: user_id },
    process.env.PRIVATE_KEY,
    {
      expiresIn: '8h'
    }
  )
}

// Middleware pour checker le JWT
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && JSON.parse(authHeader.split(' ')[1])

  if (token == null) {
    return res
      .status(401)
      .json({ auth: false, message: 'Bearer Json Web Token is required!' })
  }

  jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
    console.log('decoded:', decoded)
    if (err)
      return res.status(401).json({ auth: false, message: 'Wrong Token!' })
    req.userId = decoded.id
    next()
  })
}

module.exports = { calculateToken, verifyToken }
