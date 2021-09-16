// Import router: myRouter = require('./myRoute')
const conceptRouter = require('./concept')
const setupRoutes = app => {
  // add your middware route: app.use('url', myRouter)
  app.use('/concept', conceptRouter)
}

module.exports = { setupRoutes }
