const teamRouter = require('express').Router();
const Team = require('../models/team');

teamRouter.get('/', (req, res) => {
  Team.findTeam(req.query)
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error retrieving team member from database');
})

module.exports = teamRouter