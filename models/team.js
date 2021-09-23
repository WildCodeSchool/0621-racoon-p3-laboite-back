const connection = require('../db-config')
const Joi = require('joi')

const db = connection.promise()

// Get member team
const getInfo = () => {
  let sql = 'SELECT * FROM team'
  return db.query(sql).then(([results]) => results)
}

// const findOne = (id) => {
//   return db
//     .query('SELECT * FROM team WHERE id = ?', [id])
//     .then(([results]) => results[0]);
// };

// const create = ({ member_img, member_name, member_role }) => {
//   return db
//     .query('INSERT INTO team (member_img, member_name, member_role) VALUES (?, ?, ?)',
//     [member_img, member_name, member_role]
//     )
//     .then(([results]) => {
//       const id = results.insertId;
//       return { id, member_img, member_name, member_role};
//     });
// };

// const update = (id, newAttributes) => {
//   return db.query('UPDATE team SET ? WHERE id = ?', [newAttributes, id]);
// }

// const destroy = (id) => {
//   return db
//     .query('DELETE FROM team WHERE id = ?', [id])
//     .then(([result]) => result.affectedRows !== 0);
// }

module.exports = {
  getInfo
}
