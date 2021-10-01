const mysql = require('../db-config')
const { promise } = require('../db-config')
const poleRouter = require('express').Router()

// Get all poles

poleRouter.get('/', (req, res) => {
  mysql.query('SELECT p.* FROM pole as p', (err, result) => {
    if (err) {
      res.status(500).send('Error retrieving data from database')
    } else {
      res.status(200).json(result)
    }
  })
})

// Get all activities

poleRouter.get('/', (req, res) => {
  mysql.query('SELECT a.* FROM activity as a', (err, result) => {
    if (err) {
      res.status(500).send('Error retrieving data from database')
    } else {
      res.status(200).json(result)
    }
  })
})

// Get one pole

poleRouter.get('/:id', (req, res) => {
  const poleId = req.params.id
  mysql.query(
    'SELECT p.*, a.activity_desc, a.activity_img, a.activity_title, a.pole_id, a.id FROM pole as p LEFT JOIN activity as a ON p.id=a.pole_id WHERE p.id = ?',
    [poleId],
    (err, result) => {
      if (err) {
        res.status(500).send('Error retrieving data from database one pole')
      } else {
        // test if the id exist
        if (result.length === 0) {
          res.status(404).send('not found')
          return
        }
        // create entity mapped with result in order to get the activities inside one pole
        let poleEntity = {
          pole_id: result[0].id,
          pole_name: result[0].pole_name,
          pole_title: result[0].pole_title,
          pole_picto: result[0].pole_picto,
          pole_desc: result[0].pole_desc,
          pole_banner: result[0].pole_banner,
          pole_func: result[0].pole_func,
          pole_func_img: result[0].pole_func_img,
          pole_num: result[0].pole_num,
          pole_email: result[0].pole_email,
          pole_miniature_img: result[0].pole_miniature_img,
          pole_catchphrase: result[0].pole_catchphrase,
          activities: []
        }
        for (let i = 0; i < result.length; i++) {
          if (result[i].pole_id) {
            console.log(result)
            poleEntity.activities.push({
              id: result[i].id,
              activity_desc: result[i].activity_desc,
              activity_img: result[i].activity_img,
              activity_title: result[i].activity_title
            })
          }
        }
        res.status(200).json(poleEntity)
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
  console.table(req.body)
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
        'INSERT INTO activity (activity_desc, activity_img, activity_title, pole_id) VALUES ?'
      const activityData = req.body.activity.map(services => [
        // tableau avec les champs qui attendent les values add [values] in postman
        services[0], //activity_desc
        services[1], //activity_img
        services[2], //activity_title
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

// Modify -------------------------------------------
poleRouter.put('/:id', (req, res) => {
  const poleId = req.params.id
  const sql = `UPDATE pole SET ? WHERE id = ?`
  console.log(req.body)
  const values = [req.body, poleId]
  mysql.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send('error modifying data')
    } else {
      console.table(result)
      res.status(200).json(result)
    }
  })
})

// Delete ------------------------------------------
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
