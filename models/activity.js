const connection = require('../db-config')
const Joi = require('joi')

const db = connection.promise()

//Get all from activity
const getInfo = () => {
  let sql = 'SELECT * FROM activity'
  return db.query(sql).then(([results]) => results)
}

// Get by id
const getById = id => {4
  let sql = 'SELECT * FROM activity WHERE id = ?'
  return db.query(sql, [id]).then(([result]) => result[0])
}

const create = ({ activity_desc, activity_img, activity_title }) => {
  return db
    .query('INSERT INTO activity SET ?', {
      activity_desc,
      activity_img,
      activity_title
    })
    .then(([result]) => {
      const id = result.insertId
      return { activity_desc, activity_img, activity_title, id }
    })
}

const update = (id, newItem) => {
  return db.query("UPDATE activity SET ? WHERE id = ?", [newItem, id])
}

module.exports = {
  getInfo,
  getById,
  create, 
  update
}
