const partnersRouter = require('express').Router()
const Partners = require('../models/partners')
const { verifyToken } = require('../helpers/Jwt')

// Get all

partnersRouter.get('/', (req, res) => {
  Partners.getInfo()
    .then(partner => {
      res.status(200).json(partner)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Error Server')
    })
})

//Get one
partnersRouter.get('/:id', (req, res) => {
  const partner_id = req.params.id
  Partners.findOne(partner_id)
    .then(partner => {
      if (!partner) {
        res.status(404).json({ message: `Partner not found` })
      } else {
        res.status(200).json(partner)
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Error retrieving partner from database')
    })
})

//Add
partnersRouter.post('/', verifyToken, (req, res) => {
  // const { partner_name } = req.body
  // console.log('partnerName', partner_name)
  // if (!partner_name) res.status(401).json({ message: 'Name is required' })
  // else {
  //   Partners.findOneWithName(partner_name).then(part => {
  //     console.log('findPartner', part)
  //     if (part) {
  //       res.status(401).json({ message: `partner already exists` })
  //     } else {
  //       console.log('body', req.body)
  const { partner_img, partner_name } = req.body
  console.log('body data', partner_img, partner_name)
  Partners.create(partner_img, partner_name)
    .then(createdPartner => {
      res
        .status(201)
        .json({ message: 'Partner Created !', partner: createdPartner })
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: `Error saving the partner` })
    })
})
//   }
// })

//Modify
partnersRouter.put('/:id', verifyToken, (req, res) => {
  const partner_id = req.params.id
  let validationErrors = null
  Partners.findOne(partner_id)
    .then(partner => {
      if (!partner) {
        res
          .status(404)
          .json({ message: `partner with id ${partner_id} not found.` })
      }
      console.log(req.body)
      validationErrors = Partners.validate(req.body, false)
      if (validationErrors) {
        res.status(422).json({ validationErrors: validationErrors.details })
      } else {
        Partners.update(partner_id, req.body)
      }
    })

    .then(() => {
      res
        .status(200)
        .json({ message: 'partner updated !', partner: { ...req.body } })
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Error updating a partner.' })
    })
})

//Delete
partnersRouter.delete('/:id', verifyToken, (req, res) => {
  const partner_id = req.params.id
  console.log('partner_id:', partner_id)
  Partners.destroy(partner_id)
    .then(deleted => {
      if (deleted) res.status(200).json({ message: `🎉 partner deleted!` })
      else res.status(404).json({ message: `partner not found` })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: `Error deleting a partner` })
    })
})

module.exports = partnersRouter
