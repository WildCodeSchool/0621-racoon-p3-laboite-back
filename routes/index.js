// Import router: myRouter = require('./myRoute')
const poleRouter = require('./pole')
const conceptRouter = require('./concept')

  // add your middware route: app.use('url', myRouter)
  const setupRoutes = app => {
  app.use('/pole', poleRouter)
  app.use('/concept', conceptRouter)
}

module.exports = { setupRoutes }
