const connection = require('../db-config')

const db = connection.promise()

const getInfo = () => {
  return db.query('SELECT * FROM social_net').then(([results]) => results)
}

module.exports = { getInfo }
