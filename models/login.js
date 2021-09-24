const connection = require('../db-config')

const db = connection.promise()

const addAdmin = (email, hashedPassword) => {
  return db
    .query('INSERT INTO admin (admin_email, admin_password) VALUES (?,?)', [
      email,
      hashedPassword
    ])
    .then(results => results)
}

const findByEmail = email => {
  console.log('emailToClient', email)
  return db
    .query('SELECT * FROM admin WHERE admin_email = ?', [email])
    .then(([results]) => console.log('resToDb', results[0]) || results[0])
}

module.exports = { findByEmail, addAdmin }
