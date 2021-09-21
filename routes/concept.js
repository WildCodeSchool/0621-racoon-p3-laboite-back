const express = require('express')
const mysql = require('../db-config')
const router = express.Router()

// get text and image from concept
router.get('/', (req, res) => {
  mysql.query('SELECT text, concept_img FROM concept', (err, result) => {
    if (err) {
      res.status(500).send('Error retrieving data from database')
    } else {
      res.status(200).JSON(result)
    }
  })
})

// Post text and image from concept
router.post('/', (req, res) => {
  const conceptData = [req.body.text, req.body.image]
  mysql.query(
    'INSERT INTO `concept` (`text`, `concept_img`) VALUES (?, ?);',
    conceptData,
    (err, result) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(200).json(result)
      }
    }
  )
})

module.exports = router
