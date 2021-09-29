const connection = require('../db-config')
// const Joi = require('join')

const db = connection.promise()

const getInfo = () => {
  return db.query('SELECT * FROM contact').then(([results]) => results[0])
}

module.exports = { getInfo }
