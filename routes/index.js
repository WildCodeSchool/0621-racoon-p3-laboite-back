// Import router: const myRouter = require('./myRoute')
const conceptRouter = require('./concept')
const contactRouter = require('./contact')
const socialRouter = require('./social')

const setupRoutes = app => {
  // add your middware route: app.use('/myUrl', myRouter)
  app.use('/concept', conceptRouter)
  app.use('/contact', contactRouter)
  app.use('/social', socialRouter)
}

module.exports = { setupRoutes }
