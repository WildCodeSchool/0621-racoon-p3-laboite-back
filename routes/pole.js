const polesRouter = require('express').Router()
const poleService = require('../models/pole')
const { verifyToken } = require('../helpers/Jwt')

// Get all poles without activities
polesRouter.get('/', (req, res) => {
  poleService
    .getInfo(req.query)
    .then(pole => {
      res.json(pole)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Error retrieving poles from databa' })
    })
})

// Get one pole by ID without activities for backoffice
polesRouter.get('/admin/:id', verifyToken, (req, res) => {
  const poleId = req.params.id
  poleService
    .getById(poleId)
    .then(pole => {
      if (!pole) res.status(404).json({ message: `pole not found` })
      else res.status(200).json(pole)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Error retrieving pole from database' })
    })
})

// Get one pole by ID with activities for public
polesRouter.get('/:id', (req, res) => {
  const poleId = req.params.id
  poleService
    .getByIdFull(poleId)
    // test if the id exist
    .then(result => {
      if (!result) {
        res.status(404).json({ message: `pole not found` })
        return
      }

      // create entity mapped with result in order to get the activities inside one pole
      // avec une seule requête tu crées un tableau d'objets ou tu récupères n fois le nombre d'activités le pole requêté by id
      let pole = result[0]
      let poleEntity = {
        pole_id: pole.pole_id,
        pole_name: pole.pole_name,
        pole_title: pole.pole_title,
        pole_picto: pole.pole_picto,
        pole_desc: pole.pole_desc,
        pole_banner: pole.pole_banner,
        pole_func: pole.pole_func,
        pole_func_img: pole.pole_func_img,
        pole_num: pole.pole_num,
        pole_email: pole.pole_email,
        pole_miniature_img: pole.pole_miniature_img,
        pole_catchphrase: pole.pole_catchphrase,
        activities: []
      }

      // on push les activités avec la foreign key pole_id liée dans activities
      for (let i = 0; i < result.length; i++) {
        if (result[i].id) {
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
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Error retrieving pole from database' })
    })
})

// Post -------------------------------------------------
// Create a pole -------------
polesRouter.post('/', verifyToken, (req, res) => {
  const poleData = req.body
  if (!poleData.pole_title)
    res.status(401).json({ message: 'Pole title is required' })
  else {
    poleService.findOneWithTitle(poleData.pole_title).then(duplicatePole => {
      if (duplicatePole) {
        res.status(401).json({ message: `Pole already exists` })
      } else {
        poleService
          .create(poleData)
          .then(result =>
            res.status(201).json({ message: 'Pole Created !', poleId: result })
          )
          .catch(err => {
            console.error(err)
            res.status(500).json({ message: `Error saving the pole` })
          })
      }
    })
  }
})

// Modify pole -------------------------------------------
polesRouter.put('/:id', verifyToken, (req, res) => {
  const poleId = req.params.id
  const values = [req.body, poleId]
  poleService
    .update(pole_id, values)
    .then(() =>
      res.status(200).json({ message: 'Pole updated !', pole: values })
    )
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: `Error updating the pole` })
    })
})
// Delete pole ------------------------------------------
polesRouter.delete('/:id', verifyToken, (req, res) => {
  const poleId = req.params.id
  poleService
    .destroy(poleId)
    .then(deleted => {
      if (deleted) res.status(200).json({ message: `🎉 Pole deleted!` })
      else res.status(404).json({ message: `Pole not found` })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: `Error deleting a Pole` })
    })
})

module.exports = polesRouter
