const mysql = require('../db-config')
const { promise } = require('../db-config')
const poleRouter = require('express').Router()

// Get all poles

poleRouter.get('/', (req, res) => {
  mysql.query(
    'SELECT p.*, a.activity_desc, a.activity_img, a.pole_id FROM pole as p LEFT JOIN activity as a ON p.id=a.pole_id;',
    (err, result) => {
      if (err) {
        res.status(500).send('Error retrieving data from database')
      } else {
        res.status(200).json(result)
      }
    }
  )
})

// Get one pole

poleRouter.get('/:id', (req, res) => {
  const poleId = req.params.id
  mysql.query(
    'SELECT p.*, a.activity_desc, a.activity_img, a.pole_id FROM pole as p LEFT JOIN activity as a ON p.id=a.pole_id WHERE p.id = ?',
    [poleId],
    (err, result) => {
      if (err) {
        res.status(500).send('Error retrieving data from database')
      } else {
        res.status(200).json(result)
      }
    }
  )
})

// Post ---------------------------------------------------------

poleRouter.post('/', (req, res) => {
  const poleData = [
    req.body.pole_name,
    req.body.pole_title,
    req.body.pole_picto,
    req.body.pole_desc,
    req.body.pole_banner,
    req.body.pole_func,
    req.body.pole_func_img,
    req.body.pole_num,
    req.body.pole_email,
    req.body.pole_miniature_img,
    req.body.pole_catchphrase
  ]
  const sql =
    'INSERT INTO pole (pole_name, pole_title, pole_picto, pole_desc, pole_banner, pole_func, pole_func_img, pole_num, pole_email, pole_miniature_img, pole_catchphrase) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
  mysql.query(sql, poleData, (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).send('Error from database')
    } else {
      console.log(result)
      const poleId = result.insertId
      const sql2 =
        'INSERT INTO activity (activity_desc, activity_img, pole_id) VALUES ?'
      const activityData = req.body.activity.map(services => [
        services[0],
        services[1],
        poleId
      ])
      console.log(activityData)
      mysql.query(sql2, [activityData], (err, result2) => {
        if (err) {
          res.status(500).send(err)
        } else {
          res.status(201).json({ ...req.body })
        }
      })
    }
  })
})

poleRouter.delete('/:id', (req, res) => {
  const poleId = req.params.id
  mysql.query('DELETE FROM pole WHERE id = ? ', [poleId], err => {
    if (err) {
      res.status(500).send('Error deleting pole')
    } else {
      res.status(200).send('Pole deleted')
    }
  })
})

module.exports = poleRouter
