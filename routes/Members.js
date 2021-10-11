const membersRouter = require('express').Router()
const Member = require('../models/member')

membersRouter.get('/', (req, res) => {
  Member.getInfo(req.query)
    .then(team => {
      res.json(team)
    })

    .catch(err => {
      console.log(err)
      res.status(500).send('Error retrieving team member from database')
    })
})

membersRouter.get('/:id', (req, res) => {
  const id = req.params.id
  Member.findOne(id).then(member => {
    if (!member) {
      res.status(404).json({ message: `Member not found` })
    } else {
      res.status(200).json(member)
    }
  })
})

membersRouter.post('/', (req, res) => {
  const { member_name } = req.body[0]
  console.log('memName', member_name)
  if (!member_name) res.status(401).json({ message: 'Name is required' })
  else {
    Member.findOneWithName(member_name).then(user => {
      console.log('finUser', user)
      if (user) {
        res.status(401).json({ message: `Member already exists` })
      } else {
        console.log('body', req.body)
        const { member_img, member_name, member_role } = req.body[0]
        console.log('body data', member_img, member_name, member_role)
        Member.create(member_img, member_name, member_role)
          .then(createdTeam => {
            res
              .status(201)
              .json({ message: 'Member Create !', member: createdTeam })
          })
          .catch(err => {
            console.error(err)
            res.status(500).json({ message: `Error saving the team` })
          })
      }
    })
  }
})

membersRouter.put('/', (req, res) => {
  const member_id = req.body.member_id
  let existingTeam = null
  let validationErrors = null
  Member.findOne(req.params.id)
    .then(Team => {
      existingTeam = Team
      if (!existingTeam) return Promise.reject('RECORD_NOT_FOUND')
      validationErrors = Team.validate(req.body, false)
      if (validationErrors) return Promise.reject('INVALID_DATA')
      return Team.update(req.params.id, req.body)
    })
    .then(() => {
      res.status(200).json({ ...existingTeam, ...req.body })
    })
    .catch(err => {
      console.error(err)
      if (err === 'RECORD_NOT_FOUND')
        res.status(404).send(`team with id ${req.params.id} not found.`)
      else if (err === 'INVALID_DATA')
        res.status(422).json({ validationErrors: validationErrors.details })
      else res.status(500).send('Error updating a team.')
    })
})

membersRouter.delete('/:id', (req, res) => {
  const member_id = req.params.id
  console.log('member_id:', member_id)
  Member.destroy(member_id)
    .then(deleted => {
      if (deleted) res.status(200).json({ message: `🎉 Member deleted!` })
      else res.status(404).json({ message: `Member not found` })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: `Error deleting a Member` })
    })
})

module.exports = membersRouter
