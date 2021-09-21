// Import router: myRouter = require('./myRoute')
const conceptRouter = require('./concept')
const teamRouter = require('./team')

const setupRoutes = app => {
  // add your middware route: app.use('url', myRouter)
  app.use('/concept', conceptRouter);
  app.use('/team', teamRouter);
}

module.exports = { setupRoutes }
