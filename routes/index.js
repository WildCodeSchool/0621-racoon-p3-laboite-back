// Import router: myRouter = require('./myRoute')
const poleRouter = require('./pole')

const setupRoutes = app => {
  // add your middware route: app.use('url', myRouter)
  app.use('/pole', poleRouter)
}

module.exports = { setupRoutes }
