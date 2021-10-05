const connection = require('../db-config')
const Joi = require('joi')

const db = connection.promise()

//Get all from activity
const getInfo = () => {
  let sql = 'SELECT * FROM activity'
  return db.query(sql).then(([results]) => results)
}

// Get by id
const getById = id => {
  4
  let sql = 'SELECT * FROM activity WHERE id = ?'
  return db.query(sql, [id]).then(([result]) => result[0])
}

const create = (id, activity_title, activity_img, activity_desc, pole_id) => {
  console.log('poulet03', activity_desc, activity_img, activity_title, pole_id)
  return db
    .query('INSERT INTO activity SET ?', {
      activity_desc,
      activity_img,
      activity_title,
      pole_id
    })
    .then(([result]) => {
      const id = result.insertId
      return { activity_desc, activity_img, activity_title, id, pole_id }
    })
}

const update = (id, newItem) => {
  return db.query('UPDATE activity SET ? WHERE id = ?', [newItem, id])
}

const destroy = id => {
  return db
    .query('DELETE FROM activity WHERE id = ?', [id])
    .then(([result]) => result.affectedRows !== 0)
}

module.exports = {
  getInfo,
  getById,
  create,
  update,
  destroy
}
