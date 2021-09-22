// Import router: const myRouter = require('./myRoute')
const conceptRouter = require('./concept')
const contactRouter = require('./contact')
const socialRouter = require('./social')
const poleRouter = require('./pole')
const teamRouter = require('./team')

// add your middware route: app.use('url', myRouter)
const setupRoutes = app => {
  app.use('/pole', poleRouter)
  app.use('/concept', conceptRouter)
  app.use('/contact', contactRouter)
  app.use('/social', socialRouter)
  app.use('/team', teamRouter);
}

module.exports = { setupRoutes }
