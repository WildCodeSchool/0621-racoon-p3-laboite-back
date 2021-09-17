const express = require('express')
const mysql = require('../db-config')
const { promise } = require('../db-config')
const poleRouter = require('express').Router()

// Get all poles //

poleRouter.get('/', (req, res) => {
  mysql.query(
    'SELECT p.*, a.activity_desc, a.activity_img, a.pole_id FROM pole as p LEFT JOIN activity as a ON p.id=a.pole_id;',
    (err, result) => {
      if (err) {
        res.status(500).send('Error retrieving data from database')
      } else {
        console.log(result)
        res.status(200).json(result)
      }
    }
  )
})

// Post all poles //

// poleRouter.post('/', (req, res) => {
//    const { pole_name, pole_banner, pole_title, pole_picto, pole_desc, pole_func, pole_func_img, pole_num, pole_email, pole_id, activity_name, activity_img } = req.body;
// mysql.query('SELECT * FROM pole LEFT JOIN activity ON pole.id=activity.pole_id'
// )
// }

// Get one pole//

poleRouter.get('/:id', (req, res) => {
  const poleId = req.params.id
  mysql.query('SELECT * FROM pole WHERE id = ?', [poleId], (err, result) => {
    if (err) {
      res.status(500).send('Error retrieving data from database')
    } else {
      res.status(200).json(result)
    }
  })
})

module.exports = poleRouter
