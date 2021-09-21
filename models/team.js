const connection = require('../db-config');
const Joi = require('joi');

const db = connection.promise()


// Get member team
const findTeam = () => {
  let sql = 'SELECT * FROM team';
  return db.query(sql).then(([results]) => results);
}

module.exports = {
  findTeam,
}