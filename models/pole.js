const connection = require('../db-config')
const Joi = require('joi')
const pole = require('../routes/pole')

const db = connection.promise()

// Get all from poles without activities
const getInfo = () => {
  let sql = 'SELECT p.* FROM pole as p'
  return db.query(sql).then(([results]) => results)
}

// Get one pole by id without activities
const getById = id => {
  let sql = 'SELECT * FROM pole WHERE id = ?'
  return db.query(sql, [id]).then(([result]) => result[0])
}

// Get one pole by id with activities
// On aura une requete avec n lignes d'activités associées au pole
const getByIdFull = id => {
  let sql =
    'SELECT p.*, a.activity_desc, a.activity_img, a.activity_title, a.pole_id, a.id FROM pole as p LEFT JOIN activity as a ON p.id=a.pole_id WHERE p.id = ?'
  return db.query(sql, [id]).then(([results]) => results)
}

// Get pole from title
const findOneWithTitle = title => {
  return db
    .query('SELECT * FROM pole WHERE pole_title LIKE ?', [title])
    .then(([results]) => results[0])
}

// Create a pole
const create = pole => {
  const poleData = [
    pole.pole_name,
    pole.pole_title,
    pole.pole_picto,
    pole.pole_desc,
    pole.pole_banner,
    pole.pole_func,
    pole.pole_func_img,
    pole.pole_num,
    pole.pole_email,
    pole.pole_miniature_img,
    pole.pole_catchphrase
  ]
  const sql =
    'INSERT INTO pole (pole_name, pole_title, pole_picto, pole_desc, pole_banner, pole_func, pole_func_img, pole_num, pole_email, pole_miniature_img, pole_catchphrase) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

  return db.query(sql, poleData).then(([results]) => results.insertId)
}

// Modify a pole
const update = (id, newItem) => {
  return db.query('UPDATE pole SET ? WHERE id = ?', [newItem, id])
}

// Delete a pole
const destroy = id => {
  return db
    .query('DELETE FROM pole WHERE id = ?', [id])
    .then(([result]) => result.affectedRows !== 0)
}

module.exports = {
  getInfo,
  getById,
  getByIdFull,
  findOneWithTitle,
  create,
  update,
  destroy
}
