const connection = require('../db-config')
const Joi = require('joi')
const db = connection.promise()

const validate = (data, forCreation = true) => {
  const presence = forCreation ? 'required' : 'optional'
  return Joi.object({
    email: Joi.string().email().max(254).presence(presence),
    password: Joi.string().max(255).presence(presence)
  }).validate(data, { abortEarly: false }).error
}

const addAdmin = (email, hashedPassword) => {
  return db
    .query('INSERT INTO admin (admin_email, admin_password) VALUES (?,?)', [
      email,
      hashedPassword
    ])
    .then(results => results)
}

const findByEmail = email => {
  return db
    .query('SELECT * FROM admin WHERE admin_email = ?', [email])
    .then(([results]) => console.log('resToDb', results[0]) || results[0])
}

module.exports = { findByEmail, addAdmin, validate }
