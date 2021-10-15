const connection = require('../db-config')
const Joi = require('joi')
const db = connection.promise()


// Validate Data
const validate = (data, forCreation = true) => {
  const presence = forCreation ? 'required' : 'optional'
  return Joi.object({
    partner_id: Joi.number().presence(presence),
    partner_name: Joi.string().max(254).presence(presence),
    partner_img: Joi.string().max(255).allow('', null),
  }).validate(data, { abortEarly: false }).error
}

// Get all 
const getInfo = () => {
  return db.query('SELECT * FROM partner').then(([results]) => results)
}

// Get partner from id
const findOne = partner_id => {
  return db
    .query('SELECT * FROM partner WHERE partner_id = ?', [partner_id])
    .then(([results]) => results[0])
}

// Get partner from name
const findOneWithName = name => {
  return db
    .query('SELECT * FROM partner WHERE partner_name LIKE ?', [partner_name])
    .then(([results]) => results[0])
}
// Create partner
const create = (partner_img, partner_name) => {
  console.log(partner_img, partner_name)
  return db
    .query(
      'INSERT INTO partner (partner_img, partner_name) VALUES (?, ?)',
      [partner_img, partner_name]
    )
    .then(([results]) => {
      const partner_id = results.insertId
      return { partner_id, partner_img, partner_name }
    })
}

// Update partner
const update = (partner_id, newAttributes) => {
  return db.query('UPDATE partner SET ? WHERE partner_id = ?', [
    newAttributes,
    partner_id
  ])
}

// Delete partner
const destroy = partner_id => {
  return db
    .query('DELETE FROM partner WHERE partner_id = ?', [partner_id])
    .then(([result]) => result.affectedRows !== 0)
}

module.exports = {  getInfo,
  validate,
  findOne,
  findOneWithName,
  create,
  update,
  destroy }
