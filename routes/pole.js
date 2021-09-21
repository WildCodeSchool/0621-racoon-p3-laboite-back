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
        res.status(200).json(result)
      }
    }
  )
})

// Get one pole//

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

// Post //

poleRouter.post('/', (req, res) => {
  const {
    pole_name,
    pole_title,
    pole_picto,
    pole_desc,
    pole_banner,
    pole_func,
    pole_func_img,
    pole_num,
    pole_email,
    pole_miniature_img,
    pole_catchphrase
  } = req.body
  mysql.query(
    'INSERT INTO pole (pole_name, pole_title, pole_picto, pole_desc, pole_banner, pole_func, pole_func_img, pole_num, pole_email, pole_miniature_img, pole_catchphrase) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      pole_name,
      pole_title,
      pole_picto,
      pole_desc,
      pole_banner,
      pole_func,
      pole_func_img,
      pole_num,
      pole_email,
      pole_miniature_img,
      pole_catchphrase
    ],
    (err, result) => {
      if (err) {
        res.status(500).send('Error saving pole')
      } else {
        const id = result.insertId
        const newPole = { ...req.body, id }
        res.status(201).json(newPole)
      }
    }
  )
})

poleRouter.delete('/:id', (req, res) => {
  const poleId = req.params.id
  mysql.query('DELETE FROM pole WHERE id = ?', [poleId], err => {
    if (err) {
      res.status(500).send('Error deleting pole')
    } else {
      res.status(200).send('Pole deleted')
    }
  })
})

module.exports = poleRouter
