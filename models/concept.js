const connection = require('../db-config')
const Joi = require('joi')

const db = connection.promise()

//Get all from concept
const getInfo = () => {
  let sql = 'SELECT * FROM concept'
  return db.query(sql).Then(([results]) => results)
}

module.exports = {
  getInfo
}
