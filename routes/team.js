const teamRouter = require('express').Router()
const Team = require('../models/team')

teamRouter.get('/', (req, res) => {
  Team.findTeam(req.query)
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send('Error retrieving team member from database')
    })
})

// teamRouter.post('/', (req, res) => {
//   const error = Team.validate(req.body)
//   if (error) {
//     res.status(422).json({ validationErrors: error.details })
//   } else {
//     Team.create(req.body)
//       .then((createdTeam) => {
//         res.status(201).json(createdTeam)
//       })
//       .catch(( err ) => {
//         console.error(err)
//         res.status(500).send('Error saving the member')
//       })
//   }
// })

// teamRouter.put('/', (req, res) => {
//   let existingMember = null
//   let validationErrors = null
//   Team.findOne(req.params.id)
//     .then((member) => {
//       existingMember = member
//       if (!existingMember) return Promise.reject('RECORD_NOT_FOUND');
//       validationErrors = Member.validate(req.body, false);
//       if (validationErrors) return Promise.reject('INVALID_DATA');
//       return Team.update(req.params.id, req.body);
//     })
//     .then(() => {
//       res.status(200).json({ ...existingMember, ...req.body })
//     })
//     .catch((err) => {
//       console.error(err);
//       if (err === 'RECORD_NOT_FOUND')
//         res.status(404).send(`Member with id ${req.params.id} not found.`)
//       else if (err === 'INVALID_DATA')
//         res.status(422).json({ validationErrors: validationErrors.details })
//       else res.status(500).send('Error updating a member.')
//     })
// })

// teamRouter.delete('/:id', (req, res) => {
//   Team.destroy(req.params.id)
//     .then((deleted) => {
//       if (deleted) res.status(200).send('🎉 Member deleted!');
//       else res.status(404).send('Member not found');
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send('Error deleting a member');
//     })
// })

module.exports = teamRouter