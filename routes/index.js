// Import router: myRouter = require('./myRoute')
const poleRouter = require('./pole')
const conceptRouter = require('./concept')

const setupRoutes = app => {
  // add your middware route: app.use('url', myRouter)
  app.use('/pole', poleRouter)
  app.use('/concept', conceptRouter)
}

module.exports = { setupRoutes }
