const connection = require('../db-config')

const Joi = require('joi')

const db = connection.promise()

// Validate Data
const validate = (data, forCreation = true) => {
  const presence = forCreation ? 'required' : 'optional'
  return Joi.object({
    member_id: Joi.number().presence(presence),
    member_name: Joi.string()
      .max(254)
      .presence(presence),
    member_img: Joi.string()
      .max(255)
      .allow('', null),
    member_role: Joi.string()
      .max(255)
      .allow('', null)
  }).validate(data, { abortEarly: false }).error
}

// Get team members
const getInfo = () => {
  let sql = 'SELECT * FROM member'
  return db.query(sql).then(([results]) => results)
}

// Get member from id
const findOne = member_id => {
  return db
    .query('SELECT * FROM member WHERE member_id = ?', [member_id])
    .then(([results]) => results[0])
}
// Get member from name
const findOneWithName = name => {
  return db
    .query('SELECT * FROM member WHERE member_name LIKE ?', [name])
    .then(([results]) => results[0])
}
// Create member
const create = (member_img, member_name, member_role) => {
  return db
    .query(
      'INSERT INTO member (member_img, member_name, member_role) VALUES (?, ?, ?)',
      [member_img, member_name, member_role]
    )
    .then(([results]) => {
      const member_id = results.insertId
      return { member_id, member_img, member_name, member_role }
    })
}
// Update member
const update = (member_id, newAttributes) => {
  return db.query('UPDATE member SET ? WHERE member_id = ?', [
    newAttributes,
    member_id
  ])
}
// Delete member
const destroy = member_id => {
  return db
    .query('DELETE FROM member WHERE member_id = ?', [member_id])
    .then(([result]) => result.affectedRows !== 0)
}

module.exports = {
  getInfo,
  validate,
  findOne,
  findOneWithName,
  create,
  update,
  destroy
}
